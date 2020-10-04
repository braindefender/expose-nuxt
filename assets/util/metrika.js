const metrika = function (d, a, b) {
  ;(a[b] = a[b] || []).push(function () {
    try {
      // eslint-disable-next-line no-undef
      a.yaCounter48026945 = new Ya.Metrika({
        id: 48026945,
        clickmap: !0,
        trackLinks: !0,
        accurateTrackBounce: !0,
        webvisor: !0,
      })
      // eslint-disable-next-line no-undef
      a.yaCounter36646655 = new Ya.Metrika({
        id: 36646655,
        clickmap: !0,
        trackLinks: !0,
        accurateTrackBounce: !0,
      })
    } catch (f) {}
  })

  const e = d.getElementsByTagName('script')[0]
  const c = d.createElement('script')

  b = function () {
    e.parentNode.insertBefore(c, e)
  }

  c.type = 'text/javascript'
  c.async = !0
  c.src = 'https://mc.yandex.ru/metrika/watch.js'
  a.opera === '[object Opera]'
    ? d.addEventListener('DOMContentLoaded', b, !1)
    : b()
}

metrika(document, window, 'yandex_metrika_callbacks')
