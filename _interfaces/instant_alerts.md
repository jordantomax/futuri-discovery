---
  name: Instant Alerts
  order: 3
  img: ldr1-instant-alerts
  feature_sets:
    - name: Features
      features:
        - Email / SMS / Twitter - Stations can opt out of 1 of these if they choose, so the design needs to look ok with 2 options instead of 3
        - Choose frequency - Negotiable?
        - Need to be able to manage alerts (esp to unsubscribe from alerts from previous sessions)
        - Currently done via a “Manage Alerts” tab, buried and needs to be re-imagined

  services:
    - name: Rdio
      img: rdio-share-facebook-modal 
      feature: Alert Settings
      desc: If we decided to stay with an approach similar to what we have, this might be an elegant way to do that. Replace 'Share this song' with 'Set an alert', and we have a simple and focused experience that shows relevant meta data about the song or artist you want to be alerted of. 


  analysis: "There are as many as 4 clicks (and a field entry for new users) to set up a new alert. The main reason for this is that each song has global and local options associated with it. Even if the user doesn't want to change anything, they still see each of these options every time they want to set an alert<br><br> 

  To elaborate, selecting sms, email, or twitter is something that a user will only ever want to do once. It should apply to all alerts that are set. It would be surprising for a user wanting to receive a text alert when Jason Derulo comes on, and a Twitter alert when Sam Smith comes on. Similarly, the 'Phone, Email, or Handle' input is global. <br><br>

  The only setting that is local is 'How many times?', which we unfortunately don't have enough data about to make a very informed decision.  In an ideal world, alerts could be turned on and off by clicking an icon or text on a song's row, which would then show an active/inactive state. Turning on an alert should not require the user to see a modal. If it were the user's first time setting an alert, we would show alert settings similar to what is done right now.<br><br>

  If it is necessary to be able to change the number of alerts that a user wants per song, perhaps we could expose this option more seamlessly when the user clicks to be alerted. The user clicks once, we show an active state and the text '1x'. They click again, we change the text to read '3x'. They click again, we show 'every time'. One more time, and we disable the alert. In this way, we reduce the visual friction on each song row to an absolute minimum, and only surface relevant content when the user decides to interact with it.<br><br>

  Before we do make a decision about how to handle the number of times though, It would be helpful to have more data about why this feature exists as it does. I wonder if it would be possible to reduce all alerts down to a single alert to create a simpler and more consistent interface. It would also help to drive traffic to the radio station by requiring them to come back and interact with the widget. It is hard for users to think beyond their immediate choices, and it's best to ask them questions only when they are relevant. Asking a user to think 3x into the future is a mental strain on that user. Instead, when we send an alert, we could give an option to reply in order to reset it. This would force the user to interact and also create a simplified interface. 
  "

---

