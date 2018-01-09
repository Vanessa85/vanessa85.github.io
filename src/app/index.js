import $ from 'jquery';
import '../styles/main.scss';
import 'tooltipster/dist/css/tooltipster.bundle.css';
import 'tooltipster/dist/css/plugins/tooltipster/sideTip/themes/tooltipster-sideTip-borderless.min.css';

require('tooltipster');

document.addEventListener('DOMContentLoaded', function() {
  $('.tooltip').tooltipster({
    theme: 'tooltipster-borderless',
    side: 'bottom'
  });
});
