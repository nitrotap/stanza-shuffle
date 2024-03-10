const poems2 = [
  {
    title: "The Road Not Taken",
    author: "Robert Frost",
    content: `
      Two roads diverged in a yellow wood,
      And sorry I could not travel both
      And be one traveler, long I stood
      And looked down one as far as I could
      To where it bent in the undergrowth;

      Then took the other, as just as fair,
      And having perhaps the better claim,
      Because it was grassy and wanted wear;
      Though as for that the passing there
      Had worn them really about the same,

      And both that morning equally lay
      In leaves no step had trodden black.
      Oh, I kept the first for another day!
      Yet knowing how way leads on to way,
      I doubted if I should ever come back.

      I shall be telling this with a sigh
      Somewhere ages and ages hence:
      Two roads diverged in a wood, and I—
      I took the one less traveled by,
      And that has made all the difference.
    `
  },
  {
    title: "If",
    author: "Rudyard Kipling",
    content: `
      If you can keep your head when all about you
      Are losing theirs and blaming it on you,
      If you can trust yourself when all men doubt you,
      But make allowance for their doubting too;
      If you can wait and not be tired by waiting,
      Or being lied about, don’t deal in lies,
      Or being hated, don’t give way to hating,
      And yet don’t look too good, nor talk too wise:

      If you can dream—and not make dreams your master;
      If you can think—and not make thoughts your aim;
      If you can meet with Triumph and Disaster
      And treat those two impostors just the same;
      If you can bear to hear the truth you’ve spoken
      Twisted by knaves to make a trap for fools,
      Or watch the things you gave your life to, broken,
      And stoop and build ’em up with worn-out tools:

      If you can make one heap of all your winnings
      And risk it on one turn of pitch-and-toss,
      And lose, and start again at your beginnings
      And never breathe a word about your loss;
      If you can force your heart and nerve and sinew
      To serve your turn long after they are gone,
      And so hold on when there is nothing in you
      Except the Will which says to them: ‘Hold on!’

      If you can talk with crowds and keep your virtue,
      Or walk with Kings—nor lose the common touch,
      If neither foes nor loving friends can hurt you,
      If all men count with you, but none too much;
      If you can fill the unforgiving minute
      With sixty seconds’ worth of distance run,
      Yours is the Earth and everything that’s in it,
      And—which is more—you’ll be a Man, my son!
    `
  },
  {
    title: "I Wandered Lonely as a Cloud",
    author: "William Wordsworth",
    content: `
      I wandered lonely as a cloud
      That floats on high o'er vales and hills,
      When all at once I saw a crowd,
      A host, of golden daffodils;
      Beside the lake, beneath the trees,
      Fluttering and dancing in the breeze.

      Continuous as the stars that shine
      And twinkle on the milky way,
      They stretched in never-ending line
      Along the margin of a bay:
      Ten thousand saw I at a glance,
      Tossing their heads in sprightly dance.

      The waves beside them danced; but they
      Out-did the sparkling waves in glee:
      A poet could not but be gay,
      In such a jocund company:
      I gazed—and gazed—but little thought
      What wealth the show to me had brought:

      For oft, when on my couch I lie
      In vacant or in pensive mood,
      They flash upon that inward eye
      Which is the bliss of solitude;
      And then my heart with pleasure fills,
      And dances with the daffodils.
    `
  },
  {
    title: "A Dream Within A Dream",
    author: "Edgar Allan Poe",
    content: `
      Take this kiss upon the brow!
      And, in parting from you now,
      Thus much let me avow —
      You are not wrong, who deem
      That my days have been a dream;
      Yet if hope has flown away
      In a night, or in a day,
      In a vision, or in none,
      Is it therefore the less gone?
      All that we see or seem
      Is but a dream within a dream.

      I stand amid the roar
      Of a surf-tormented shore,
      And I hold within my hand
      Grains of the golden sand —
      How few! yet how they creep
      Through my fingers to the deep,
      While I weep — while I weep!
      O God! Can I not grasp
      Them with a tighter clasp?
      O God! can I not save
      One from the pitiless wave?
      Is all that we see or seem
      But a dream within a dream?
    `
  },
  {
    title: "O Captain! My Captain!",
    author: "Walt Whitman",
    content: `
      O Captain! my Captain! our fearful trip is done,
      The ship has weather’d every rack, the prize we sought is won,
      The port is near, the bells I hear, the people all exulting,
      While follow eyes the steady keel, the vessel grim and daring;
      But O heart! heart! heart!
      O the bleeding drops of red,
      Where on the deck my Captain lies,
      Fallen cold and dead.

      O Captain! my Captain! rise up and hear the bells;
      Rise up—for you the flag is flung—for you the bugle trills,
      For you bouquets and ribbon’d wreaths—for you the shores a-crowding,
      For you they call, the swaying mass, their eager faces turning;
      Here Captain! dear father!
      This arm beneath your head!
      It is some dream that on the deck,
      You’ve fallen cold and dead.

      My Captain does not answer, his lips are pale and still,
      My father does not feel my arm, he has no pulse nor will,
      The ship is anchor’d safe and sound, its voyage closed and done,
      From fearful trip the victor ship comes in with object won;
      Exult O shores, and ring O bells!
      But I with mournful tread,
      Walk the deck my Captain lies,
      Fallen cold and dead.
    `
  },
  // Add more poems below
  {
    title: "Sonnet 18: Shall I compare thee to a summer’s day?",
    author: "William Shakespeare",
    content: `
      Shall I compare thee to a summer’s day?
      Thou art more lovely and more temperate:
      Rough winds do shake the darling buds of May,
      And summer’s lease hath all too short a date;

      Sometime too hot the eye of heaven shines,
      And often is his gold complexion dimm'd;
      And every fair from fair sometime declines,
      By chance or nature’s changing course untrimm'd;

      But thy eternal summer shall not fade
      Nor lose possession of that fair thou owest;
      Nor shall Death brag thou wanderest in his shade,
      When in eternal lines to time thou growest:

      So long as men can breathe or eyes can see,
      So long lives this, and this gives life to thee.
    `
  },
  {
    title: "The Raven",
    author: "Edgar Allan Poe",
    content: `
      Once upon a midnight dreary, while I pondered, weak and weary,
      Over many a quaint and curious volume of forgotten lore—
      While I nodded, nearly napping, suddenly there came a tapping,
      As of some one gently rapping, rapping at my chamber door.
      “’Tis some visitor,” I muttered, “tapping at my chamber door—
      Only this and nothing more.”

      Ah, distinctly I remember it was in the bleak December;
      And each separate dying ember writhed upon the floor.
      Eagerly I wished the morrow;—vainly I had sought to borrow
      From my books surcease of sorrow—sorrow for the lost Lenore—
      For the rare and radiant maiden whom the angels name Lenore—
      Nameless here for evermore.

      And the silken, sad, uncertain rustling of each purple curtain
      Thrilled me—filled me with fantastic terrors never felt before;
      So that now, to still the beating of my heart, I stood repeating
      “’Tis some visitor entreating entrance at my chamber door—
      Some late visitor entreating entrance at my chamber door;—
      This it is and nothing more.”

      Presently my soul grew stronger; hesitating then no longer,
      “Sir,” said I, “or Madam, truly your forgiveness I implore;
      But the fact is I was napping, and so gently you came rapping,
      And so faintly you came tapping, tapping at my chamber door,
      That I scarce was sure I heard you”—here I opened wide the door;—
      Darkness there and nothing more.

      Deep into that darkness peering, long I stood there wondering, fearing,
      Doubting, dreaming dreams no mortal ever dared to dream before;
      But the silence was unbroken, and the stillness gave no token,
      And the only word there spoken was the whispered word, “Lenore?”
      This I whispered, and an echo murmured back the word, “Lenore!”—
      Merely this and nothing more.

      Back into the chamber turning, all my soul within me burning,
      Soon again I heard a tapping somewhat louder than before.
      “Surely,” said I, “surely there is something at my window lattice;
      Let me see, then, what thereat is, and this mystery explore—
      Let my heart be still a moment and this mystery explore;—
      ’Tis the wind and nothing more!”

      Open here I flung the shutter, when, with many a flirt and flutter,
      In there stepped a stately Raven of the saintly days of yore;
      Not the least obeisance made he; not a minute stopped or stayed he;
      But, with mien of lord or lady, perched above my chamber door—
      Perched upon a bust of Pallas just above my chamber door—
      Perched, and sat, and nothing more.

      Then this ebony bird beguiling my sad fancy into smiling,
      By the grave and stern decorum of the countenance it wore,
      “Though thy crest be shorn and shaven, thou,” I said, “art sure no craven,
      Ghastly grim and ancient Raven wandering from the Nightly shore—
      Tell me what thy lordly name is on the Night’s Plutonian shore!”
      Quoth the Raven “Nevermore.”

      Much I marvelled this ungainly fowl to hear discourse so plainly,
      Though its answer little meaning—little relevancy bore;
      For we cannot help agreeing that no living human being
      Ever yet was blessed with seeing bird above his chamber door—
      Bird or beast upon the sculptured bust above his chamber door,
      With such name as “Nevermore.”

      But the Raven, sitting lonely on the placid bust, spoke only
      That one word, as if his soul in that one word he did outpour.
      Nothing farther then he uttered—not a feather then he fluttered—
      Till I scarcely more than muttered “Other friends have flown before—
      On the morrow he will leave me, as my Hopes have flown before.”
      Then the bird said “Nevermore.”

      Startled at the stillness broken by reply so aptly spoken,
      “Doubtless,” said I, “what it utters is its only stock and store
      Caught from some unhappy master whom unmerciful Disaster
      Followed fast and followed faster till his songs one burden bore—
      Till the dirges of his Hope that melancholy burden bore
      Of ‘Never—nevermore.’”

      But the Raven still beguiling all my sad soul into smiling,
      Straight I wheeled a cushioned seat in front of bird, and bust and door;
      Then, upon the velvet sinking, I betook myself to linking
      Fancy unto fancy, thinking what this ominous bird of yore—
      What this grim, ungainly, ghastly, gaunt, and ominous bird of yore
      Meant in croaking “Nevermore.”

      This I sat engaged in guessing, but no syllable expressing
      To the fowl whose fiery eyes now burned into my bosom’s core;
      This and more I sat divining, with my head at ease reclining
      On the cushion’s velvet lining that the lamplight gloated o’er,
      But whose velvet-violet lining with the lamplight gloating o’er,
      She shall press, ah, nevermore!

      Then, methought, the air grew denser, perfumed from an unseen censer
      Swung by Seraphim whose foot-falls tinkled on the tufted floor.
      “Wretch,” I cried, “thy God hath lent thee—by these angels he hath sent thee
      Respite—respite and nepenthe from thy memories of Lenore!
      Quaff, oh quaff this kind nepenthe and forget this lost Lenore!”
      Quoth the Raven “Nevermore.”

      “Prophet!” said I, “thing of evil!—prophet still, if bird or devil!
      By that Heaven that bends above us—by that God we both adore—
      Tell this soul with sorrow laden if, within the distant Aidenn,
      It shall clasp a sainted maiden whom the angels name Lenore—
      Clasp a rare and radiant maiden whom the angels name Lenore.”
      Quoth the Raven “Nevermore.”

      “Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—
      “Get thee back into the tempest and the Night’s Plutonian shore!
      Leave no black plume as a token of that lie thy soul hath spoken!
      Leave my loneliness unbroken!—quit the bust above my door!
      Take thy beak from out my heart, and take thy form from off my door!”
      Quoth the Raven “Nevermore.”

      And the Raven, never flitting, still is sitting, still is sitting
      On the pallid bust of Pallas just above my chamber door;
      And his eyes have all the seeming of a demon’s that is dreaming,
      And the lamp-light o’er him streaming throws his shadow on the floor;
      And my soul from out that shadow that lies floating on the floor
      Shall be lifted—nevermore!
    `
  },
  {
    title: "Annabel Lee",
    author: "Edgar Allan Poe",
    content: `
      It was many and many a year ago,
      In a kingdom by the sea,
      That a maiden there lived whom you may know
      By the name of Annabel Lee;
      And this maiden she lived with no other thought
      Than to love and be loved by me.

      I was a child and she was a child,
      In this kingdom by the sea,
      But we loved with a love that was more than love—
      I and my Annabel Lee—
      With a love that the wingèd seraphs of Heaven
      Coveted her and me.

      And this was the reason that, long ago,
      In this kingdom by the sea,
      A wind blew out of a cloud, chilling
      My beautiful Annabel Lee;
      So that her highborn kinsmen came
      And bore her away from me,
      To shut her up in a sepulchre
      In this kingdom by the sea.

      The angels, not half so happy in Heaven,
      Went envying her and me—
      Yes!—that was the reason (as all men know,
      In this kingdom by the sea)
      That the wind came out of the cloud by night,
      Chilling and killing my Annabel Lee.

      But our love it was stronger by far than the love
      Of those who were older than we—
      Of many far wiser than we—
      And neither the angels in Heaven above
      Nor the demons down under the sea
      Can ever dissever my soul from the soul
      Of the beautiful Annabel Lee;

      For the moon never beams, without bringing me dreams
      Of the beautiful Annabel Lee;
      And the stars never rise, but I feel the bright eyes
      Of the beautiful Annabel Lee;
      And so, all the night-tide, I lie down by the side
      Of my darling—my darling—my life and my bride,
      In her sepulchre there by the sea—
      In her tomb by the sounding sea.
    `
  },
  {
    title: "The Love Song of J. Alfred Prufrock",
    author: "T.S. Eliot",
    content: `
      Let us go then, you and I,
      When the evening is spread out against the sky
      Like a patient etherized upon a table;
      Let us go, through certain half-deserted streets,
      The muttering retreats
      Of restless nights in one-night cheap hotels
      And sawdust restaurants with oyster-shells:
      Streets that follow like a tedious argument
      Of insidious intent
      To lead you to an overwhelming question...
      Oh, do not ask, “What is it?”
      Let us go and make our visit.

      In the room the women come and go
      Talking of Michelangelo.

      The yellow fog that rubs its back upon the window-panes,
      The yellow smoke that rubs its muzzle on the window-panes
      Licked its tongue into the corners of the evening,
      Lingered upon the pools that stand in drains,
      Let fall upon its back the soot that falls from chimneys,
      Slipped by the terrace, made a sudden leap,
      And seeing that it was a soft October night,
      Curled once about the house, and fell asleep.

      And indeed there will be time
      For the yellow smoke that slides along the street,
      Rubbing its back upon the window panes;
      There will be time, there will be time
      To prepare a face to meet the faces that you meet;
      There will be time to murder and create,
      And time for all the works and days of hands
      That lift and drop a question on your plate;
      Time for you and time for me,
      And time yet for a hundred indecisions,
      And for a hundred visions and revisions,
      Before the taking of a toast and tea.

      In the room the women come and go
      Talking of Michelangelo.

      And indeed there will be time
      To wonder, “Do I dare?” and, “Do I dare?”
      Time to turn back and descend the stair,
      With a bald spot in the middle of my hair—
      (They will say: “How his hair is growing thin!”)
      My morning coat, my collar mounting firmly to the chin,
      My necktie rich and modest, but asserted by a simple pin—
      (They will say: “But how his arms and legs are thin!”)
      Do I dare
      Disturb the universe?
      In a minute there is time
      For decisions and revisions which a minute will reverse.

      For I have known them all already, known them all—
      Have known the evenings, mornings, afternoons,
      I have measured out my life with coffee spoons;
      I know the voices dying with a dying fall
      Beneath the music from a farther room.
      So how should I presume?

      And I have known the eyes already, known them all—
      The eyes that fix you in a formulated phrase,
      And when I am formulated, sprawling on a pin,
      When I am pinned and wriggling on the wall,
      Then how should I begin
      To spit out all the butt-ends of my days and ways?
      And how should I presume?

      And I have known the arms already, known them all—
      Arms that are braceleted and white and bare
      (But in the lamplight, downed with light brown hair!)
      Is it perfume from a dress
      That makes me so digress?
      Arms that lie along a table, or wrap about a shawl.
      And should I then presume?
      And how should I begin?

      Shall I say, I have gone at dusk through narrow streets
      And watched the smoke that rises from the pipes
      Of lonely men in shirt-sleeves, leaning out of windows?…

      I should have been a pair of ragged claws
      Scuttling across the floors of silent seas.

      And the afternoon, the evening, sleeps so peacefully!
      Smoothed by long fingers,
      Asleep… tired… or it malingers,
      Stretched on the floor, here beside you and me.
      Should I, after tea and cakes and ices,
      Have the strength to force the moment to its crisis?
      But though I have wept and fasted, wept and prayed,
      Though I have seen my head (grown slightly bald) brought in upon a platter,
      I am no prophet—and here’s no great matter;
      I have seen the moment of my greatness flicker,
      And I have seen the eternal Footman hold my coat, and snicker,
      And in short, I was afraid.

      And would it have been worth it, after all,
      After the cups, the marmalade, the tea,
      Among the porcelain, among some talk of you and me,
      Would it have been worth while,
      To have bitten off the matter with a smile,
      To have squeezed the universe into a ball
      To roll it towards some overwhelming question,
      To say: “I am Lazarus, come from the dead,
      Come back to tell you all, I shall tell you all”—
      If one, settling a pillow by her head,
      Should say: “That is not what I meant at all;
      That is not it, at all.”

      And would it have been worth it, after all,
      Would it have been worth while,
      After the sunsets and the dooryards and the sprinkled streets,
      After the novels, after the teacups, after the skirts that trail along the floor—
      And this, and so much more?—
      It is impossible to say just what I mean!
      But as if a magic lantern threw the nerves in patterns on a screen:
      Would it have been worth while
      If one, settling a pillow or throwing off a shawl,
      And turning toward the window, should say:
      “That is not it at all,
      That is not what I meant, at all.”

      No! I am not Prince Hamlet, nor was meant to be;
      Am an attendant lord, one that will do
      To swell a progress, start a scene or two,
      Advise the prince; no doubt, an easy tool,
      Deferential, glad to be of use,
      Politic, cautious, and meticulous;
      Full of high sentence, but a bit obtuse;
      At times, indeed, almost ridiculous—
      Almost, at times, the Fool.

      I grow old… I grow old…
      I shall wear the bottoms of my trousers rolled.

      Shall I part my hair behind?   Do I dare to eat a peach?
      I shall wear white flannel trousers, and walk upon the beach.
      I have heard the mermaids singing, each to each.

      I do not think that they will sing to me.

      I have seen them riding seaward on the waves
      Combing the white hair of the waves blown back
      When the wind blows the water white and black.

      We have lingered in the chambers of the sea
      By sea-girls wreathed with seaweed red and brown
      Till human voices wake us, and we drown.
    `
  },
  {
    title: "To Autumn",
    author: "John Keats",
    content: `
      Season of mists and mellow fruitfulness,
      Close bosom-friend of the maturing sun;
      Conspiring with him how to load and bless
      With fruit the vines that round the thatch-eves run;
      To bend with apples the moss'd cottage-trees,
      And fill all fruit with ripeness to the core;
      To swell the gourd, and plump the hazel shells
      With a sweet kernel; to set budding more,
      And still more, later flowers for the bees,
      Until they think warm days will never cease,
      For Summer has o'er-brimm'd their clammy cells.

      Who hath not seen thee oft amid thy store?
      Sometimes whoever seeks abroad may find
      Thee sitting careless on a granary floor,
      Thy hair soft-lifted by the winnowing wind;
      Or on a half-reap'd furrow sound asleep,
      Drows'd with the fume of poppies, while thy hook
      Spares the next swath and all its twined flowers:
      And sometimes like a gleaner thou dost keep
      Steady thy laden head across a brook;
      Or by a cyder-press, with patient look,
      Thou watchest the last oozings hours by hours.

      Where are the songs of Spring? Ay, where are they?
      Think not of them, thou hast thy music too,—
      While barred clouds bloom the soft-dying day,
      And touch the stubble-plains with rosy hue;
      Then in a wailful choir the small gnats mourn
      Among the river sallows, borne aloft
      Or sinking as the light wind lives or dies;
      And full-grown lambs loud bleat from hilly bourn;
      Hedge-crickets sing; and now with treble soft
      The red-breast whistles from a garden-croft;
      And gathering swallows twitter in the skies.
    `
  },
  {
    title: "The Waste Land",
    author: "T.S. Eliot",
    content: `
      April is the cruellest month, breeding
      Lilacs out of the dead land, mixing
      Memory and desire, stirring
      Dull roots with spring rain.
      Winter kept us warm, covering
      Earth in forgetful snow, feeding
      A little life with dried tubers.

      Summer surprised us, coming over the Starnbergersee
      With a shower of rain; we stopped in the colonnade,
      And went on in sunlight, into the Hofgarten,
      And drank coffee, and talked for an hour.
      Bin gar keine Russin, stamm’ aus Litauen, echt deutsch.
      And when we were children, staying at the arch-duke’s,
      My cousin’s, he took me out on a sled,
      And I was frightened. He said, Marie,
      Marie, hold on tight. And down we went.
      In the mountains, there you feel free.

      I read, much of the night, and go south in the winter.

      What are the roots that clutch, what branches grow
      Out of this stony rubbish? Son of man,
      You cannot say, or guess, for you know only
      A heap of broken images, where the sun beats,
      And the dead tree gives no shelter, the cricket no relief,
      And the dry stone no sound of water. Only
      There is shadow under this red rock,
      (Come in under the shadow of this red rock),
      And I will show you something different from either
      Your shadow at morning striding behind you
      Or your shadow at evening rising to meet you;
      I will show you fear in a handful of dust.

      Frisch weht der Wind
      Der Heimat zu
      Mein Irisch Kind,
      Wo weilest du?

      “You gave me hyacinths first a year ago;
      “They called me the hyacinth girl.”
      —Yet when we came back, late, from the Hyacinth garden,
      Your arms full, and your hair wet, I could not
      Speak, and my eyes failed, I was neither
      Living nor dead, and I knew nothing,
      Looking into the heart of light, the silence.
      Oed’ und leer das Meer.

      Madam Sosostris, famous clairvoyante,
      Had a bad cold, nevertheless
      Is known to be the wisest woman in Europe,
      With a wicked pack of cards. Here, said she,
      Is your card, the drowned Phoenician Sailor,
      (Those are pearls that were his eyes. Look!)
      Here is Belladonna, the Lady of the Rocks,
      The lady of situations.
      Here is the man with three staves, and here the Wheel,
      And here is the one-eyed merchant, and this card,
      Which is blank, is something he carries on his back,
      Which I am forbidden to see. I do not find
      The Hanged Man. Fear death by water.
      I see crowds of people, walking round in a ring.
      Thank you. If you see dear Mrs. Equitone,
      Tell her I bring the horoscope myself:
      One must be so careful these days.

      Unreal City,
      Under the brown fog of a winter dawn,
      A crowd flowed over London Bridge, so many,
      I had not thought death had undone so many.
      Sighs, short and infrequent, were exhaled,
      And each man fixed his eyes before his feet.
      Flowed up the hill and down King William Street,
      To where Saint Mary Woolnoth kept the hours
      With a dead sound on the final stroke of nine.
      There I saw one I knew, and stopped him, crying “Stetson!
      “You who were with me in the ships at Mylae!
      “That corpse you planted last year in your garden,
      “Has it begun to sprout? Will it bloom this year?
      “Or has the sudden frost disturbed its bed?
      “Oh keep the Dog far hence, that’s friend to men,
      “Or with his nails he’ll dig it up again!
      “You! hypocrite lecteur!—mon semblable,—mon frère!”
    `
  },
  {
    title: "Ozymandias",
    author: "Percy Bysshe Shelley",
    content: `
      I met a traveller from an antique land
      Who said: Two vast and trunkless legs of stone
      Stand in the desart. Near them, on the sand,
      Half sunk, a shattered visage lies, whose frown,
      And wrinkled lip, and sneer of cold command,
      Tell that its sculptor well those passions read
      Which yet survive, stamped on these lifeless things,
      The hand that mocked them and the heart that fed;
      And on the pedestal these words appear:
      "My name is Ozymandias, king of kings;
      Look on my works, ye Mighty, and despair!"
      Nothing beside remains. Round the decay
      Of that colossal wreck, boundless and bare
      The lone and level sands stretch far away.
    `
  },
  {
    title: "Daffodils",
    author: "William Wordsworth",
    content: `
      I wandered lonely as a cloud
      That floats on high o'er vales and hills,
      When all at once I saw a crowd,
      A host of golden daffodils;
      Beside the lake, beneath the trees,
      Fluttering and dancing in the breeze.

      Continuous as the stars that shine
      And twinkle on the milky way,
      They stretched in never-ending line
      Along the margin of a bay:
      Ten thousand saw I at a glance,
      Tossing their heads in sprightly dance.

      The waves beside them danced; but they
      Out-did the sparkling waves in glee:
      A poet could not but be gay,
      In such a jocund company:
      I gazed—and gazed—but little thought
      What wealth the show to me had brought:

      For oft, when on my couch I lie
      In vacant or in pensive mood,
      They flash upon that inward eye
      Which is the bliss of solitude;
      And then my heart with pleasure fills,
      And dances with the daffodils.
    `
  },
  {
    title: "She Walks in Beauty",
    author: "Lord Byron",
    content: `
      She walks in beauty, like the night
      Of cloudless climes and starry skies;
      And all that’s best of dark and bright
      Meet in her aspect and her eyes;
      Thus mellowed to that tender light
      Which heaven to gaudy day denies.

      One shade the more, one ray the less,
      Had half impaired the nameless grace
      Which waves in every raven tress,
      Or softly lightens o’er her face;
      Where thoughts serenely sweet express,
      How pure, how dear their dwelling-place.

      And on that cheek, and o’er that brow,
      So soft, so calm, yet eloquent,
      The smiles that win, the tints that glow,
      But tell of days in goodness spent,
      A mind at peace with all below,
      A heart whose love is innocent!
    `
  },
  {
    title: "The Tyger",
    author: "William Blake",
    content: `
      Tyger Tyger, burning bright,
      In the forests of the night;
      What immortal hand or eye,
      Could frame thy fearful symmetry?

      In what distant deeps or skies.
      Burnt the fire of thine eyes?
      On what wings dare he aspire?
      What the hand, dare seize the fire!

      And what shoulder, & what art,
      Could twist the sinews of thy heart?
      And when thy heart began to beat,
      What dread hand? & what dread feet?

      What the hammer? what the chain,
      In what furnace was thy brain?
      What the anvil? what dread grasp,
      Dare its deadly terrors clasp!

      When the stars threw down their spears
      And water'd heaven with their tears:
      Did he smile his work to see?
      Did he who made the Lamb make thee?

      Tyger Tyger burning bright,
      In the forests of the night:
      What immortal hand or eye,
      Dare frame thy fearful symmetry?
    `
  },
  {
    title: "Stopping by Woods on a Snowy Evening",
    author: "Robert Frost",
    content: `
      Whose woods these are I think I know.
      His house is in the village though;
      He will not see me stopping here
      To watch his woods fill up with snow.

      My little horse must think it queer
      To stop without a farmhouse near
      Between the woods and frozen lake
      The darkest evening of the year.

      He gives his harness bells a shake
      To ask if there is some mistake.
      The only other sound’s the sweep
      Of easy wind and downy flake.

      The woods are lovely, dark and deep,
      But I have promises to keep,
      And miles to go before I sleep,
      And miles to go before I sleep.
    `
  },
  {
    title: "I Wandered Lonely as a Cloud",
    author: "William Wordsworth",
    content: `
      I wandered lonely as a cloud
      That floats on high o'er vales and hills,
      When all at once I saw a crowd,
      A host of golden daffodils;
      Beside the lake, beneath the trees,
      Fluttering and dancing in the breeze.

      Continuous as the stars that shine
      And twinkle on the milky way,
      They stretched in never-ending line
      Along the margin of a bay:
      Ten thousand saw I at a glance,
      Tossing their heads in sprightly dance.

      The waves beside them danced; but they
      Out-did the sparkling waves in glee:
      A poet could not but be gay,
      In such a jocund company:
      I gazed—and gazed—but little thought
      What wealth the show to me had brought:

      For oft, when on my couch I lie
      In vacant or in pensive mood,
      They flash upon that inward eye
      Which is the bliss of solitude;
      And then my heart with pleasure fills,
      And dances with the daffodils.
    `
  },
  {
    title: "Kubla Khan",
    author: "Samuel Taylor Coleridge",
    content: `
      In Xanadu did Kubla Khan
      A stately pleasure-dome decree:
      Where Alph, the sacred river, ran
      Through caverns measureless to man
      Down to a sunless sea.
      So twice five miles of fertile ground
      With walls and towers were girdled round;
      And there were gardens bright with sinuous rills,
      Where blossomed many an incense-bearing tree;
      And here were forests ancient as the hills,
      Enfolding sunny spots of greenery.
    `
  },
  {
    title: "Ode to a Nightingale",
    author: "John Keats",
    content: `
      My heart aches, and a drowsy numbness pains
      My sense, as though of hemlock I had drunk,
      Or emptied some dull opiate to the drains
      One minute past, and Lethe-wards had sunk:
      'Tis not through envy of thy happy lot,
      But being too happy in thine happiness,—
      That thou, light-winged Dryad of the trees
      In some melodious plot
      Of beechen green, and shadows numberless,
      Singest of summer in full-throated ease.

      O for a draught of vintage, that hath been
      Cool'd a long age in the deep-delved earth,
      Tasting of Flora and the country green,
      Dance, and Provençal song, and sunburnt mirth!
      O for a beaker full of the warm South,
      Full of the true, the blushful Hippocrene,
      With beaded bubbles winking at the brim,
      And purple-stained mouth;
      That I might drink, and leave the world unseen,
      And with thee fade away into the forest dim:

      Fade far away, dissolve, and quite forget
      What thou among the leaves hast never known,
      The weariness, the fever, and the fret
      Here, where men sit and hear each other groan;
      Where palsy shakes a few, sad, last gray hairs,
      Where youth grows pale, and spectre-thin, and dies;
      Where but to think is to be full of sorrow
      And leaden-eyed despairs,
      Where Beauty cannot keep her lustrous eyes,
      Or new Love pine at them beyond to-morrow.

      Away! away! for I will fly to thee,
      Not charioted by Bacchus and his pards,
      But on the viewless wings of Poesy,
      Though the dull brain perplexes and retards:
      Already with thee! tender is the night,
      And haply the Queen-Moon is on her throne,
      Cluster'd around by all her starry Fays;
      But here there is no light,
      Save what from heaven is with the breezes blown
      Through verdurous glooms and winding mossy ways.

      I cannot see what flowers are at my feet,
      Nor what soft incense hangs upon the boughs,
      But, in embalmed darkness, guess each sweet
      Wherewith the seasonable month endows
      The grass, the thicket, and the fruit-tree wild;
      White hawthorn, and the pastoral eglantine;
      Fast fading violets cover'd up in leaves;
      And mid-May's eldest child,
      The coming musk-rose, full of dewy wine,
      The murmurous haunt of flies on summer eves.

      Darkling I listen; and, for many a time
      I have been half in love with easeful Death,
      Call'd him soft names in many a mused rhyme,
      To take into the air my quiet breath;
      Now more than ever seems it rich to die,
      To cease upon the midnight with no pain,
      While thou art pouring forth thy soul abroad
      In such an ecstasy!
      Still wouldst thou sing, and I have ears in vain—
      To thy high requiem become a sod.

      Thou wast not born for death, immortal Bird!
      No hungry generations tramp thee down;
      The voice I hear this passing night was heard
      In ancient days by emperor and clown:
      Perhaps the self-same song that found a path
      Through the sad heart of Ruth, when, sick for home,
      She stood in tears amid the alien corn;
      The same that oft-times hath
      Charm'd magic casements, opening on the foam
      Of perilous seas, in faery lands forlorn.

      Forlorn! the very word is like a bell
      To toll me back from thee to my sole self!
      Adieu! the fancy cannot cheat so well
      As she is fam'd to do, deceiving elf.
      Adieu! adieu! thy plaintive anthem fades
      Past the near meadows, over the still stream,
      Up the hill-side; and now 'tis buried deep
      In the next valley-glades:
      Was it a vision, or a waking dream?
      Fled is that music:—Do I wake or sleep?
    `
  },
  {
    title: "Sonnet 18",
    author: "William Shakespeare",
    content: `
      Shall I compare thee to a summer's day?
      Thou art more lovely and more temperate:
      Rough winds do shake the darling buds of May,
      And summer's lease hath all too short a date;

      Sometime too hot the eye of heaven shines,
      And often is his gold complexion dimm'd;
      And every fair from fair sometime declines,
      By chance or nature’s changing course untrimm'd;

      But thy eternal summer shall not fade
      Nor lose possession of that fair thou owest;
      Nor shall Death brag thou wanderest in his shade,
      When in eternal lines to time thou growest:

      So long as men can breathe or eyes can see,
      So long lives this, and this gives life to thee.
    `
  }
]
