import $ from 'jquery';

//webp
// import * as functions from "./modules/functions.js";

// functions.isWebp();

//mobile menu
$(document).ready(function () {
	let body_lock = document.querySelector('body');
	let menuBtn = document.querySelector('.navbar-toggler');

	menuBtn.addEventListener('click', function () {
		body_lock.classList.toggle('lock');
	})
});


//pagination blog

function getPageListBlog(totalPages, page, maxLength) {
	if (maxLength < 5) throw "maxLength must be at least 5";

	function range(start, end) {
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
	if (totalPages <= maxLength) {
		// no breaks in list
		return range(1, totalPages);
	}
	if (page <= maxLength - sideWidth - 1 - rightWidth) {
		// no break on left of page
		return range(1, maxLength - sideWidth - 1)
			.concat([0])
			.concat(range(totalPages - sideWidth + 1, totalPages));
	}
	if (page >= totalPages - sideWidth - 1 - rightWidth) {
		// no break on right of page
		return range(1, sideWidth)
			.concat([0])
			.concat(
				range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
			);
	}
	// Breaks on both sides
	return range(1, sideWidth)
		.concat([0])
		.concat(range(page - leftWidth, page + rightWidth))
		.concat([0])
		.concat(range(totalPages - sideWidth + 1, totalPages));
}

$(function () {
	// Number of items and limits the number of items per page
	var numberOfItems = $("#jar-blog .content").length;

	var w = screen.width;
	var limitPerPage = 6;
	// if (w < '768') {
	// 	var limitPerPage = 3;
	// } else
	// 	if (w < '1260') {
	// 		var limitPerPage = 6;
	// 	}
	// 	else {
	// 		var limitPerPage = 9;
	// 	}
	// Total pages rounded upwards
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	// Number of buttons at the top, not counting prev/next,
	// but including the dotted buttons.
	// Must be at least 5:
	var paginationSize = 7;
	var currentPage;

	function showPage(whichPage) {
		if (whichPage < 1 || whichPage > totalPages) return false;
		currentPage = whichPage;
		$("#jar-blog .content")
			.hide()
			.slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
			.show();
		// Replace the navigation items (not prev/next):
		$("#jar-blog .pagination li").slice(1, -1).remove();
		getPageListBlog(totalPages, currentPage, paginationSize).forEach(item => {
			$("<li>")
				.addClass(
					"page-item " +
					(item ? "current-page " : "") +
					(item === currentPage ? "active " : "")
				)
				.append(
					$("<a>")
						.addClass("page-link")
						.attr({
							href: "javascript:void(0)"
						})
						.text(item || "...")
				)
				.insertBefore("#next-page");
		});
		return true;
	}

	// Include the prev/next buttons:
	$("#jar-blog .pagination").append(
		$("<li>").addClass("page-item").attr({ id: "previous-page" }).append(
			$("<a><svg><use xlink:href='img/icons/icons.svg#arrow-down-transparent'>")
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Prev")
		),
		$("<li>").addClass("page-item").attr({ id: "next-page" }).append(
			$("<a><svg><use xlink:href='img/icons/icons.svg#arrow-down-transparent'>")
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Next")
		)
	);
	// Show the page links
	$("#jar-blog").show();
	showPage(1);

	// Use event delegation, as these items are recreated later
	$(
		document
	).on("click", "#jar-blog .pagination li.current-page:not(.active)", function () {
		return showPage(+$(this).text());
	});
	$("#jar-blog #next-page").on("click", function () {
		return showPage(currentPage + 1);
	});

	$("#jar-blog #previous-page").on("click", function () {
		return showPage(currentPage - 1);
	});
	// $(".pagination").on("click", function () {
	// 	$("html,body").animate({ scrollTop: 0 }, 0);
	// });
});



//pagination

// Returns an array of maxLength (or less) page numbers
// where a 0 in the returned array denotes a gap in the series.
// Parameters:
//   totalPages:     total number of pages
//   page:           current page
//   maxLength:      maximum size of returned array

function getPageList(totalPages, page, maxLength) {
	if (maxLength < 5) throw "maxLength must be at least 5";

	function range(start, end) {
		return Array.from(Array(end - start + 1), (_, i) => i + start);
	}

	var sideWidth = maxLength < 9 ? 1 : 2;
	var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
	var rightWidth = (maxLength - sideWidth * 2 - 2) >> 1;
	if (totalPages <= maxLength) {
		// no breaks in list
		return range(1, totalPages);
	}
	if (page <= maxLength - sideWidth - 1 - rightWidth) {
		// no break on left of page
		return range(1, maxLength - sideWidth - 1)
			.concat([0])
			.concat(range(totalPages - sideWidth + 1, totalPages));
	}
	if (page >= totalPages - sideWidth - 1 - rightWidth) {
		// no break on right of page
		return range(1, sideWidth)
			.concat([0])
			.concat(
				range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages)
			);
	}
	// Breaks on both sides
	return range(1, sideWidth)
		.concat([0])
		.concat(range(page - leftWidth, page + rightWidth))
		.concat([0])
		.concat(range(totalPages - sideWidth + 1, totalPages));
}

$(function () {
	// Number of items and limits the number of items per page
	var numberOfItems = $("#jar-meetings .content").length;

	var w = screen.width;
	var limitPerPage = 4;
	// if (w < '768') {
	// 	var limitPerPage = 3;
	// } else
	// 	if (w < '1200') {
	// 		var limitPerPage = 4;
	// 	}
	// 	else {
	// 		var limitPerPage = 6;
	// 	}
	// Total pages rounded upwards
	var totalPages = Math.ceil(numberOfItems / limitPerPage);
	// Number of buttons at the top, not counting prev/next,
	// but including the dotted buttons.
	// Must be at least 5:
	var paginationSize = 7;
	var currentPage;

	function showPage(whichPage) {
		if (whichPage < 1 || whichPage > totalPages) return false;
		currentPage = whichPage;
		$("#jar-meetings .content")
			.hide()
			.slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage)
			.show();
		// Replace the navigation items (not prev/next):
		$("#jar-meetings .pagination li").slice(1, -1).remove();
		getPageList(totalPages, currentPage, paginationSize).forEach(item => {
			$("<li>")
				.addClass(
					"page-item " +
					(item ? "current-page " : "") +
					(item === currentPage ? "active " : "")
				)
				.append(
					$("<a>")
						.addClass("page-link")
						.attr({
							href: "javascript:void(0)"
						})
						.text(item || "...")
				)
				.insertBefore("#next-page");
		});
		return true;
	}

	// Include the prev/next buttons:
	$("#jar-meetings .pagination").append(
		$("<li>").addClass("page-item").attr({ id: "previous-page" }).append(
			$("<a><svg><use xlink:href='img/icons/icons.svg#arrow-down-transparent'>")
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Prev")
		),
		$("<li>").addClass("page-item").attr({ id: "next-page" }).append(
			$("<a><svg><use xlink:href='img/icons/icons.svg#arrow-down-transparent'>")
				.addClass("page-link")
				.attr({
					href: "javascript:void(0)"
				})
			// .text("Next")
		)
	);
	// Show the page links
	$("#jar-meetings").show();
	showPage(1);

	// Use event delegation, as these items are recreated later
	$(
		document
	).on("click", "#jar-meetings .pagination li.current-page:not(.active)", function () {
		return showPage(+$(this).text());
	});
	$("#jar-meetings #next-page").on("click", function () {
		return showPage(currentPage + 1);
	});

	$("#jar-meetings #previous-page").on("click", function () {
		return showPage(currentPage - 1);
	});
	// $(".pagination").on("click", function () {
	// 	$("html,body").animate({ scrollTop: 0 }, 0);
	// });
});


//video

let PosterVideoInfo = document.querySelector('.glossоdontic__video-info'),
	play = document.querySelector(".plyr--stopped");

play.addEventListener("click", function () {
	PosterVideoInfo.classList.add('d-none');
});

$('.review .plyr__control--overlaid').wrap('<div class="btn-play__circle"/>');

//cookies modal
$(document).ready(function () {
	setTimeout(function () {
		$('#popup-cookies').click();
	}, 1000);
});