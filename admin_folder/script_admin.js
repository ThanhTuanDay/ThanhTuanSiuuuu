"use strict";

// start: Sidebar
(function () {
    let cleanup;
    document
        .querySelectorAll(".sidebar-menu-item, .sidebar-submenu-item")
        .forEach(function (item) {
            const submenu = item.querySelector(".sidebar-submenu");
            if (submenu) {
                const link = item.querySelector(
                    ".sidebar-menu-item-link, .sidebar-submenu-item-link"
                );
                if (link) {
                    link.addEventListener("click", function (e) {
                        e.preventDefault();
                        let siblings = Array.from(item.parentElement.children);
                        if (item.classList.contains("sidebar-menu-item")) {
                            siblings =
                                document.querySelectorAll(".sidebar-menu-item");
                        }
                        siblings.forEach(function (el) {
                            el.classList.toggle(
                                "active",
                                el === item &&
                                    !item.classList.contains("active")
                            );
                        });
                        if (item.classList.contains("sidebar-menu-item")) {
                            document.body.classList.remove("sidebar-collapsed");
                        }
                    });
                    if (item.classList.contains("sidebar-menu-item")) {
                        item.addEventListener("mouseenter", function () {
                            cleanup && cleanup();
                            cleanup = window.FloatingUIDOM.autoUpdate(
                                item,
                                submenu,
                                function () {
                                    updateFloatingSidebarSubmenu(item, submenu);
                                }
                            );
                        });
                    }
                }
            }
        });
    document
        .querySelectorAll('[data-toggle="sidebar"]')
        .forEach(function (item) {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                document.body.classList.toggle("sidebar-collapsed");
                document.body.classList.toggle("sidebar-mobile-shown");
                document
                    .querySelectorAll(
                        ".sidebar-menu-item, .sidebar-submenu-item"
                    )
                    .forEach(function (el) {
                        el.classList.remove("active");
                    });
            });
        });
    document
        .querySelectorAll('[data-dismiss="sidebar"]')
        .forEach(function (item) {
            item.addEventListener("click", function (e) {
                e.preventDefault();
                document.body.classList.remove("sidebar-collapsed");
                document.body.classList.remove("sidebar-mobile-shown");
                document
                    .querySelectorAll(
                        ".sidebar-menu-item, .sidebar-submenu-item"
                    )
                    .forEach(function (el) {
                        el.classList.remove("active");
                    });
            });
        });

    function updateFloatingSidebarSubmenu(item, submenu) {
        window.FloatingUIDOM.computePosition(item, submenu, {
            placement: "right-start",
            middleware: [
                window.FloatingUIDOM.shift({
                    padding: 16,
                }),
            ],
        }).then(function ({ x, y }) {
            Object.assign(submenu.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }
})();
// end: Sidebar

// start: Language
(function () {
    const dropdown = document.getElementById("topbar-language-dropdown");
    if (dropdown) {
        const image = dropdown.querySelector(".topbar-language-image");
        if (image) {
            dropdown
                .querySelectorAll("[data-language-image]")
                .forEach(function (item) {
                    item.addEventListener("click", function (e) {
                        e.preventDefault();
                        image.src = item.dataset.languageImage;
                        dropdown.classList.remove("active");
                    });
                });
        }
    }
})();
// end: Language


// start: Dropdown
(function () {
    let cleanup;
    document.addEventListener("click", function (e) {
        const dropdownToggle = e.target.closest('[data-toggle="dropdown"]');
        const dropdown = e.target.closest(".dropdown");
        if (dropdown && dropdownToggle) {
            const dropdownMenu = dropdown.querySelector(".dropdown-menu");
            if (dropdownMenu) {
                e.preventDefault();
                document.querySelectorAll(".dropdown").forEach(function (el) {
                    el.classList.toggle(
                        "active",
                        el === dropdown &&
                            !dropdown.classList.contains("active")
                    );
                });
                cleanup && cleanup();
                cleanup = window.FloatingUIDOM.autoUpdate(
                    dropdownToggle,
                    dropdownMenu,
                    function () {
                        updateDropdown(dropdownToggle, dropdownMenu);
                    }
                );
            }
        } else {
            document.querySelectorAll(".dropdown").forEach(function (el) {
                el.classList.remove("active");
            });
        }
    });

    function updateDropdown(item, submenu) {
        window.FloatingUIDOM.computePosition(item, submenu, {
            placement: "bottom-end",
            middleware: [
                window.FloatingUIDOM.shift({
                    padding: 16,
                }),
                window.FloatingUIDOM.offset(8),
            ],
        }).then(function ({ x, y }) {
            Object.assign(submenu.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }
})();
// end: Dropdown