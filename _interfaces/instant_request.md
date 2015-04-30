---
  name: Instant Request
  order: 1
  img: ldr1-instant-requests
  feature_sets:
    - name: General Features
      features:
        - Sorting by random, number of spins, recently played
        - Search for songs and suggest them if not found
        - Ability to mark songs from the stations list to buy.

    - name: Per Song Features
      features:
        - Simplify from Thumbs up / Thumbs Down into a single, positive action
        - Kill “Top 6”-style auxilliary request button, redundant
        - Sign up for an alert
        - User share on Facebook or Twitter (negotiable)
        - See “More Info” from Rovi (exact info negotiable)
        - Buy link for Rovi
        - Target to iHeartRadio search results for artist name (hidden on non-iHR stations)

  services: 
    - name: Grooveshark
      img: grooveshark-filters
      feature: Sorting
      desc: A simple, but elegant solution to sorting a list 

    - name: Facebook
      img: facebook-post
      feature: Meta Actions
      desc: Listing out meta actions as plain text links reduces visual friction of each post. Users know where to find actions, but can easily scan posts.

    - name: Reddit
      img: reddit-post
      feature: Upvote/Downvote
      desc: Reddit continues to be one of the most popular and effective voting based forums despite or perhaps because of its simplicity.

    - name: Product Hunt
      img: product-hunt-post
      feature: Upvote
      desc: Product Hunts draws inspiration from Reddit, but further simplifies its interface down to upvotes only, and removes ordering.

  analysis: "The most successful products simplify down to their core feature and make non core features less accessible. We have established that LDR1’s core features include upvoting and setting alerts, all else is secondary. <br><br>
  
  Product Hunt's model of showing a single main call to action is worth exploring, though in our case we will need to mitigate having 2 primary call-to-actions. If we decide that these call-to-actions must be of equal prominence, it may be worth exploring Facebook's model of showing simple text links.<br><br>
  
  Regardless of which features are surfaced, I recommend burying all secondary features behind a click that will bring the user one level deeper into a navigation structure. See <a href='#instant_request_expanded'>Instant Request Expanded</a> for details. Furthermore, as discussed, I recommend removing the 'Menu' construct entirely, and moving all relevant pages into the main Instant Requests page. See <a href='#instant_request_tabbing'>Instant Request Tabbing</a> for more info."
---
