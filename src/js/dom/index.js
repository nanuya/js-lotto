export const $Curry =
  ($container = document) =>
  selector =>
    $container.querySelector(selector);

export const createFormData = $el => new FormData($el);

export const insertAdjacentHTML = ($el, template) => {
  $el.insertAdjacentHTML('afterBegin', template);
};

export const replaceHTML = ($el, template) => {
  const $copied = $el.cloneNode();
  insertAdjacentHTML($copied, template);
  $el.parentNode.replaceChild($copied, $el);
};
