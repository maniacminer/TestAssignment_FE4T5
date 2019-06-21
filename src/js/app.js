const App = (function() {
    let _form = null; 
    return {
        init: function(selector) {
            domForm = document.querySelector(selector);
            if (domForm!==null) {
                _form = new Form(domForm);
                console.info('--- form initilized ---');
            }
        },
        getForm: function() {
            return _form;
        }
    }
})();

function submit() {
    console.log('!')
    return false;
}


