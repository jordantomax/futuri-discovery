{{#each this}}
  <li class="mod-school-card-small mod-white" data-index="{{@index}}">
    <div class="mod-school-card-info-wrap">
      <div class="mod-school-card-logo-wrap pos-left">
        <img class="mod-school-card-logo-small" src="{{site_url}}/assets/img/logos/{{logo}}"/>
      </div>

      <h4>{{name}}</h4>
    </div>
  </li>
{{/each}}
