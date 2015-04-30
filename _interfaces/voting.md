---
  name: Voting
  order: 4
  img: ldr1-voting
  feature_sets:
    - name: Features
      features:
        - UPick - Typically 3-5 songs, User gives one song a positive vote and then sees percentages
        - Top Song - Typically 15-50+ songs, User can vote up/down on each song in the list. Percentages aren’t shown, but songs move in position
        - There may be a way to visually make these function the same way
        - We like the idea of putting voting sessions at the top of the widget, rather than on a separate tab

  services:
    - name: Polar
      feature: Voting
      img: polar-vote
      desc: Polar is an app that focuses only on voting. Regardless of where we put voting (it sounds like everyone is in favor of moving it to the main instant requests screen), it might be worth investigating a more focused/visually rich solution such as this, which could also help to differentiate voting from your standard request list.

  analysis: "The current implementation for voting takes the user away from the normal request list to a screen that often has as few as 3 songs to vote on, in which case we are left with excessive white space. Once they have voted, they have to manually switch back to the instant requests tab, which they likely will not do. Furthermore, the content within the voting tab is similar to requests both visually and in terms of content. To alleviate these problems, I recommend moving the voting tab into the request list and promoting it to the top.<br><br>
  
  In promoting voting to the top of the requests list, we uncomplicate the user experience, prevent there from ever being a null state, and avoid visual emptiness. As noted above with Polar, it might be worth exploring an option that differentiates voting from normal song requests. Because there is only 1 call-to-action associated with voting, it seems a prime target for a visually rich and uncomplicated implementation. In addition, it would help to distinguish the purpose of voting from requesting, something which is essential if we are to merge the features.
  "

---

