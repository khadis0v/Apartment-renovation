$(function () {
  // Валидация формы
  $('#brief-form').validate({
    rules: {
      username: "required",
      phone: {
        required: true,
      }
    },
    messages: {
      username: "Укажите имя",
      phone: "Укажите номер"
    },
  }),
    $('#offer-form').validate({
      rules: {
        username: "required",
        phone: {
          required: true,
        }
      },
      messages: {
        username: "Укажите имя",
        phone: "Укажите номер"
      },
    });
})
