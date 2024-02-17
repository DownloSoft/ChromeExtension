const site = window.location.hostname;
console.log(site)

document.addEventListener("DOMContentLoaded", function () {
  if (site.includes("youtube.com")) {
    let myList = document.getElementById("contentWrapper items");
    console.log(myList);
    let newItem = document.createElement(
      "ytd-menu-service-item-download-renderer"
    );
    newItem.classList.add("style-scope", "ytd-menu-popup-renderer");
    newItem.setAttribute("tabindex", "-1");
    newItem.setAttribute("aria-selected", "false");

    newItem.innerHTML = `
	<tp-yt-paper-item
	id="primary-entry"
	class="style-scope ytd-menu-service-item-download-renderer"
	style-target="host"
	role="option"
	tabindex="0"
	aria-disabled="false"
	><!--css-build:shady-->
	<yt-icon class="style-scope ytd-menu-service-item-download-renderer"
		><!--css-build:shady--><!--css-build:shady--><yt-icon-shape
			class="style-scope yt-icon"
			><icon-shape class="yt-spec-icon-shape"
				><div style="width: 100%; height: 100%; fill: currentcolor">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24"
						viewBox="0 0 24 24"
						width="24"
						focusable="false"
						style="
							pointer-events: none;
							display: block;
							width: 100%;
							height: 100%;
						"
					>
						<path
							d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"
						></path>
					</svg></div></icon-shape></yt-icon-shape
	></yt-icon>
	<yt-formatted-string
		class="style-scope ytd-menu-service-item-download-renderer"
		>DownlSoft</yt-formatted-string
	>
</tp-yt-paper-item>
<tp-yt-paper-item
	id="secondary-entry"
	class="style-scope ytd-menu-service-item-download-renderer"
	hidden=""
	style-target="host"
	role="option"
	tabindex="0"
	aria-disabled="false"
	><!--css-build:shady-->
	<yt-icon class="style-scope ytd-menu-service-item-download-renderer"
		><!--css-build:shady--><!--css-build:shady--></yt-icon
	>
	<yt-formatted-string
		class="style-scope ytd-menu-service-item-download-renderer"
		is-empty=""
		><!--css-build:shady--><!--css-build:shady--><yt-attributed-string
			class="style-scope yt-formatted-string"
		></yt-attributed-string
	></yt-formatted-string>
</tp-yt-paper-item>
`;

    // Append the new item to the list
    myList.appendChild(newItem);
  }
});
