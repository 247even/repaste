function repaste(data) {
    "use strict";

    var template = data.template ? document.querySelector(data.template) : document.querySelector('body');
    var selectors = data.selectors ? data.selectors : null;
    var values = data.values ? data.values : null;
    var targets = data.targets ? document.querySelectorAll(data.targets) : null;

    var ct = template.innerHTML;

    if (selectors) {
        for (var key in selectors) {
            var selector = '{{' + key + '}}';
            ct = ct.replace(selector, selectors[key]);
            ct = ct.split(selector).join(selectors[key]);
        }
    }

    if (targets) {
        var tL = targets.length;
        for (var i = 0; i < tL; i++) {
            targets[i].insertAdjacentHTML('beforeend', ct);
        }
    } else {
        template.innerHTML = ct;
    }

    if (data.cut) {
        template.parentNode.removeChild(template);
    }
};
