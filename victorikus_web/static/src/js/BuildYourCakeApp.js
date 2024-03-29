odoo.define('victorikus_web.BuildYourCakeApp', function (require) {
    'use strict';

    const {Component, mount, whenReady, loadFile, useState} = require('@odoo/owl');

    class BuildYourCakeApp extends Component {
        static template = "victorikus_web.BuildYourCakeApp";

        setup() {
            console.log("BuildYourCakeApp, setup")
        }

        state = useState({step: 1, shape: 'square', size: '25cm', color: 'red'});

        updateSize(event) {
            console.log('updateSize');
            this.state.size = event.target.value;
        }

        updateShape(event) {
            console.log('updateShape');
            this.state.shape = event.target.value;
        }

        updateColor(event) {
            console.log('updateColor');
            this.state.color = event.target.value;
        }

        resetCake() {
            console.log('resetCake');
            this.state.step = 1;
            this.state.shape = 'square';
            this.state.size = '25cm';
            this.state.color = 'red';
        }
    }

    whenReady(async function () {
        const root = document.querySelector("#BuildYourCakeApp");
        if (root) {
            const templates = await loadFile(`victorikus_web/static/src/xml/BuildYourCakeApp.xml`);
            const env = {
                templates,
            };
            mount(BuildYourCakeApp, root, env);
        }
    });
});