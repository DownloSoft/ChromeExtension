// button disable or not
let downloadBtn = document.querySelector(".downloadBtn");

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  const currentURL = tabs[0] && tabs[0].url;
  console.log(currentURL);
  const element = document.getElementById("main");

  if (!currentURL || !currentURL.includes("youtube.com")) {
    downloadBtn.disabled = true;
  } else {
    downloadBtn.disabled = false;
  }

  // add type of donload
  const typeData = [
    { type: "video", quality: "best", value: "Video(720p)" },
    { type: "audio", quality: "bestaudio/best", value: "Audio(Best)" },
  ];

  typeData.forEach((item, index) => {
    const downTypeMainBox = document.querySelector(".downTypeMainBox");
    let checkElement = document.createElement("div");
    checkElement.classList.add("downTypeBox");
    checkElement.innerHTML = `<input type="checkbox" name="${index}" id="${index}" class="checkbox" value="${item.value}"/>
													<label for="${index}">${item.value}</label>`;

    downTypeMainBox.appendChild(checkElement);
  });

  // on button click
  downloadBtn.addEventListener("click", () => {
    let checkboxList = document.querySelectorAll(".checkbox");
    console.log(checkboxList);

    checkboxList.forEach((check, index) => {
      if (check.checked) {
        typeData.forEach((item, i) => {
          if (check.value == item.value) {
            requestDown(typeData[i]);
          }
        });
      }
    });
  });

  // request to api
  const requestDown = async (data) => {
    const url = "http://127.0.0.1:5000/api/ytvideo";
    try {
      console.log("hello");
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: currentURL,
          type: data.type,
          quality: data.quality,
        }),
      });
      const resData = await res.json();
      downloadFile(resData.url, "../hello.mp4");
      console.log(resData.url);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = (fileurl, filename) => {
		console.log(filename);
    chrome.downloads.download({
      url: fileurl,
      filename: filename,
			conflictAction: "uniquify",
    });
  };
});
