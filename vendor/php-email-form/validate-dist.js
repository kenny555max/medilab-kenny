!(function (e) {
  "use strict";
  function t(t, a, s) {
    e.ajax({ type: "POST", url: a, data: s, timeout: 4e4 })
      .done(function (e) {
        "OK" == e
          ? (t.find(".loading").slideUp(),
            t.find(".sent-message").slideDown(),
            t.find("input:not(input[type=submit]), textarea").val(""))
          : (t.find(".loading").slideUp(),
            e ||
              (e =
                "Form submission failed and no error message returned from: " +
                a +
                "<br>"),
            t.find(".error-message").slideDown().html(e));
      })
      .fail(function (e) {
        console.log(e);
        var a = "Form submission failed!<br>";
        (e.statusText || e.status) &&
          ((a += "Status:"),
          e.statusText && (a += " " + e.statusText),
          e.status && (a += " " + e.status),
          (a += "<br>")),
          e.responseText && (a += e.responseText),
          t.find(".loading").slideUp(),
          t.find(".error-message").slideDown().html(a);
      });
  }
  e("form.php-email-form").submit(function (a) {
    a.preventDefault();
    var s = e(this).find(".form-group"),
      i = !1,
      r = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (
      (s.children("input").each(function () {
        var t = e(this),
          a = t.attr("data-rule");
        if (void 0 !== a) {
          var s = !1,
            n = a.indexOf(":", 0);
          if (n >= 0) {
            var l = a.substr(n + 1, a.length);
            a = a.substr(0, n);
          } else a = a.substr(n + 1, a.length);
          switch (a) {
            case "required":
              "" === t.val() && (i = s = !0);
              break;
            case "minlen":
              t.val().length < parseInt(l) && (i = s = !0);
              break;
            case "email":
              r.test(t.val()) || (i = s = !0);
              break;
            case "checked":
              t.is(":checked") || (i = s = !0);
              break;
            case "regexp":
              (l = new RegExp(l)).test(t.val()) || (i = s = !0);
          }
          t.next(".validate")
            .html(
              s
                ? void 0 !== t.attr("data-msg")
                  ? t.attr("data-msg")
                  : "wrong Input"
                : ""
            )
            .show("blind");
        }
      }),
      s.children("textarea").each(function () {
        var t = e(this),
          a = t.attr("data-rule");
        if (void 0 !== a) {
          var s = !1,
            r = a.indexOf(":", 0);
          if (r >= 0) {
            var n = a.substr(r + 1, a.length);
            a = a.substr(0, r);
          } else a = a.substr(r + 1, a.length);
          switch (a) {
            case "required":
              "" === t.val() && (i = s = !0);
              break;
            case "minlen":
              t.val().length < parseInt(n) && (i = s = !0);
          }
          t.next(".validate")
            .html(
              s
                ? null != t.attr("data-msg")
                  ? t.attr("data-msg")
                  : "wrong Input"
                : ""
            )
            .show("blind");
        }
      }),
      i)
    )
      return !1;
    var n = e(this),
      l = e(this).attr("action");
    if (!l)
      return (
        n.find(".loading").slideUp(),
        n
          .find(".error-message")
          .slideDown()
          .html("The form action property is not set!"),
        !1
      );
    if (
      (n.find(".sent-message").slideUp(),
      n.find(".error-message").slideUp(),
      n.find(".loading").slideDown(),
      e(this).data("recaptcha-site-key"))
    ) {
      var d = e(this).data("recaptcha-site-key");
      grecaptcha.ready(function () {
        grecaptcha
          .execute(d, { action: "php_email_form_submit" })
          .then(function (e) {
            t(n, l, n.serialize() + "&recaptcha-response=" + e);
          });
      });
    } else t(n, l, n.serialize());
    return !0;
  });
})(jQuery);
