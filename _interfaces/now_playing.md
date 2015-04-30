---
  name: Now Playing
  order: 7
  img: ldr1-now-playing
  feature_sets:
    - name: Features
      features:
        - Currently playing song should display in widget
        - Stations should be able to configure it on/off
        - Recently Played is seen as a big feature for some stations
        - Offer Recently Played as a sort option (station-side toggle in Control Room)
        - Display timestamp when sorted by Recently Played

  services:
    - name: Google Navigation Structure
      img: google-navigation-hierarchy
      feature: Navigation Hierarchy
      desc: A powerful method to remove clutter on individual screens is by creating hierarchically organized content. In this example, clicking a tile scrolls the screen right, and provides a back arrow in the top left to return to the full list of tiles. 

    - name: Tune Genie
      feature: Recently Played
      img: tune-genie-recently-played
      desc: Tune Genie allows radio stations to add the currently playing song as well as recently played items on the playlist. 

  analysis: "This feature is somewhat unrelated to the core features of LDR1. It is an unactionable piece of content with no relationship to voting or setting alerts. Still, I acknowledge that it makes the module feel more tied to the content around it. If we are to keep this feature, it seems logical that we should try to integrate it more seamlessly with the other LDR1 features. Removing the visual separation between now playing and the instant requests list would help to accomplish this. Increasing the size of now playing would also help to give the top of the module some weight and distinction. Tune Genie does a great job of displaying relevant information for now playing and recently played. They provide a visually richer experience by including album art and other meta data.<br><br>
  
  If we are going to show now playing information, a logical next step is to also display recently played. Somehow, the features feel incomplete without one another. One way to accomplish this would be to use the same hierarchical navigation structure from our expanded instant requests illustrated in the Google Navigation Structure above. We could place a 'recently played' text link in the Now Playing song. When clicked, it would scroll the user right to a list of songs, which would be styled the same as our other instant request songs. These songs would also have the same actions as other instant request songs and an additional timestamp."

---

