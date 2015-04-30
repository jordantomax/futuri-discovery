<div class="mod-school-card mod-white no-padding">
  <div class="js-sticky">
    <div class="mod-school-header">
      <div class="mod-school-card-actions">
        <button class="ui-btn-large js-new-school"><i class="icon-cross"></i>Skip</button>
        <button class="ui-btn-large js-new-school js-add-school"><i class="icon-check"></i>Save</button>
      </div>

      <div class="mod-school-header-left">
        <h1 class="mod-school-name">{{name}} </h1>
        <span class="mod-school-chances">Chances of getting in: <span class="mod-school-card-chance-range {{chance}}">{{chance}}</span></span>
      </div>
    </div>
  </div>

  <div class="mod-school-card-banner" style="background-image: url('{{site_url}}/assets/img/banners/{{banner}}')")>
    <div class="mod-school-card-info-wrap">
      <div class="mod-school-card-info">
        <div class="mod-school-card-logo-wrap">
          <img class="mod-school-card-logo" src="{{site_url}}/assets/img/logos/{{logo}}"/>
        </div>
      </div>
    </div>
  </div>

  <div class="mod-school-section">
    <h5 class="type-weight-normal mod-school-card-because">Recommended because you like {{reason}} <a class="pos-right" href="{{site_url}}/me/recommendations">Improve Recomendations</a></h5>
    <dl>
      <dt>Region:</dt>
      <dd>{{region}}</dd>

      <dt>Popular Majors:</dt>
      <dd>
        {{#each mostPopularMajors}}
        {{this}}, 
        {{/each}}
      </dd>
    </dl>
  </div>

  <div class="mod-school-section">
    <header class="mod-school-section-header">
      <h2>Admissions</h2>
    </header>

    <dl>
      {{#with admissionsData}}
      <dt>difficulty:</dt>
      <dd>{{difficulty}}</dd>

      <dt>Regular Deadline:</dt>
      <dd>{{regularDeadline}}</dd>

      <h3>SAT</h3>
      {{#with SATMath}}
        <dt>Math:</dt>
        <dd>{{halfClassRange}}</dd>
      {{/with}}

      {{#with SATWriting}}
        <dt>Math:</dt>
        <dd>{{halfClassRange}}</dd>
      {{/with}}

      {{#with SATReading}}
        <dt>Reading:</dt>
        <dd>{{halfClassRange}}</dd>
      {{/with}}
    </dl>
    {{/with}}

    Acceptance Rate
    {{acceptanceRate}}

    Application Website:
    {{website}}

    <h4>Difficulty</h4>
    gpa: {{gpaLow}} {{gpaHigh}}
    sat: {{satLow}} {{satHigh}}
    act: {{actLow}} {{actHigh}}
    application: {{applicationSite}}
    interested in communicating with this school? 
  </div>

  <div class="mod-school-section">
    <header class="mod-school-section-header">
      <h2>Tuition</h2>
    </header>

    {{#with tuition}}
      {{#with financialAid}}
        <dl>
          <dt>Application Deadline</dt>
          <dd>{{applicationDeadline}}</dd>
          {{#with allUndergraduates}}
              <dt>Applications:</dt> <dd>{{applicants}}</dd>
              <dt>Found to have Need:</dt> <dd>{{foundToHaveNeed}}</dd>
              <dt>Received Aid:</dt> <dd>{{receivedAid}}</dd>
          {{/with}}
      {{/with}}
        </dl>
    {{/with}}
  </div>
</div>
