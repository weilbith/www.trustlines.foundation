import window from "window"
import $ from "jquery"

// See https://jsfiddle.net/mekwall/up4nu/ with heavy modifications

export default function initialize() {
  const navHeight = $(".navbar").outerHeight()
  const paddingHeight = Math.round(
    ($("section:first").outerHeight() - $("section:first").height()) / 2
  )
  const navItems = $(".navbar .navbar-item")

  const scrollItems = navItems.map(function() {
    const href = $(this).attr("href")
    if (!href || href.indexOf("#") === -1) {
      return undefined
    }

    const item = $(href.replace(/.*?(#[a-z0-9-_.]+)$/, "$1"))
    if (!item.length) {
      return undefined
    }

    $(this).click(function(e) {
      const offsetTop =
        item.find("+section").offset().top -
        navHeight +
        paddingHeight -
        Math.round(paddingHeight / 4)

      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: offsetTop,
          },
          300
        )

      $(this).blur()
      e.preventDefault()
    })

    return item
  })

  let previousId
  $(window).scroll(function() {
    // Get visible container scroll position
    const fromTop =
      $(this).scrollTop() +
      navHeight -
      paddingHeight +
      Math.round(paddingHeight / 2)

    let cur = scrollItems.map(function() {
      if (
        $(this)
          .find("+section")
          .offset().top < fromTop
      ) {
        return this
      }

      return undefined
    })

    cur = cur[cur.length - 1]
    const id = cur && cur.length ? cur[0].id : ""

    if (previousId !== id) {
      previousId = id
      if ($(`.navbar .navbar-item[href$="#${id}"]`).length) {
        $(".navbar .navbar-item").removeClass("is-active")
        $(`.navbar .navbar-item[href$="#${id}"]`).addClass("is-active")
      }
    }
  })
}
