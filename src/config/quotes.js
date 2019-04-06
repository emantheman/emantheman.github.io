const quotes = [{
  author: 'Antoine-Marie-Roger de Saint-Exupery',
  content: ['Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.']
}, {
  author: 'Steve Jobs',
  content: ['The minute that you understand that you can poke life and actually something will, you know if you push in, something will pop out the other side, that you can change it, you can mold it. That’s maybe the most important thing. It’s to shake off this erroneous notion that life is there and you’re just gonna live in it, versus embrace it, change it, improve it, make your mark upon it.']
}, {
  author: 'George Bernard Shaw',
  content: ['A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.', 'The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.', 'Youth is wasted on the young.']
}, {
  author: 'Terence Mckenna',
  content: ["We have to create culture, don't watch TV, don't read magazines, don't even listen to NPR. Create your own roadshow. The nexus of space and time where you are now is the most immediate sector of your universe, and if you're worrying about Michael Jackson or Bill Clinton or somebody else, then you are disempowered, you're giving it all away to icons, icons which are maintained by an electronic media so that you want to dress like X or have lips like Y. This is shit-brained, this kind of thinking . . . You want to reclaim your mind and get it out of the hands of the cultural engineers who want to turn you into a half-baked moron consuming all this trash that's being manufactured out of the bones of a dying world."]
}, {
  author: 'John F. Kennedy',
  content: ['Too often we enjoy the comfort of opinion without the discomfort of thought.']
}, {
  author: 'Lao Tzu',
  content: ['A good traveler has no fixed plans and is not intent on arriving.']
}, {
  author: 'Anon',
  content: ['Elegance, where it relates to design, is synonymous with "deceptive simplicity"; it denotes the stashing of complex work in plain view.']
}, {
  author: 'Robert Frost',
  content: ['In three words I can sum up everything I\'ve learned about life: it goes on.']
}, {
  author: 'John Locke',
  content: ['The acts of the mind, wherein it exerts its power over simple ideas, are chiefly these three: 1. Combining several simple ideas into one compound one, and thus all complex ideas are made. 2. The second is bringing two ideas, whether simple or complex, together, and setting them by one another so as to take a view of them at once, without uniting them into one, by which it gets all its ideas of relations. 3. The third is separating them from all other ideas that accompany them in their real existence: this is called abstraction, and thus all its general ideas are made.']
}, {
  author: 'Alan Watts',
  content: ['We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society.']
}, {
  author: 'Philip K. Dick',
  content: ['Reality is that which, when you stop believing in it, doesn\'t go away.', 'Just because something bears the aspect of the inevitable one should not, therefore, go along willingly with it.']
}, {
  author: 'Epicurus',
  content: ['Is God willing to prevent evil, but not able? Then he is not omnipotent.\nIs he able, but not willing? Then he is malevolent.\nIs he both able and willing? Then whence cometh evil?\nIs he neither able nor willing? Then why call him God?']
}, {
  author: 'Marcus Aurelius',
  content: ['Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.', 'When another blames you or hates you, or people voice similar criticisms, go to their souls, penetrate inside and see what sort of people they are. You will realize that there is no need to be racked with anxiety.']
}, {
  author: 'Charles Bukowski',
  content: ["Some people never go crazy. What truly horrible lives they must lead.", "Sometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside — remembering all the times you've felt that way.", "There's a bluebird in my heart that wants to get out\nbut I'm too tough for him,\nI say, stay in there, I'm not going to let anybody see you."]
}, {
  author: 'Ernest Hemingway',
  content: ["There is no friend as loyal as a book."]
}, {
  author: 'Oscar Wilde',
  content: ["Most people are other people. Their thoughts are someone else's opinions, their lives a mimicry, their passions a quotation.", "Be yourself; everyone else is already taken."]
}, {
  author: 'Franz Kafka',
  content: ["I think we ought to read only the kind of books that wound or stab us. If the book we're reading doesn't wake us up with a blow to the head, what are we reading for? So that it will make us happy, as you write? Good Lord, we would be happy precisely if we had no books, and the kind of books that make us happy are the kind we could write ourselves if we had to. But we need books that affect us like a disaster, that grieve us deeply, like the death of someone we loved more than ourselves, like being banished into forests far from everyone, like a suicide. A book must be the axe for the frozen sea within us. That is my belief.", "I usually solve problems by letting them devour me."]
}, {
  author: 'Mawlana Jalal-al-Din Rumi',
  content: ["Raise your words, not voice. It is rain that grows flowers, not thunder.", "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it."]
}, {
  author: 'Paulo Coelho',
  content: ["A child can teach an adult three things: to be happy for no reason, to always be busy with something, and to know how to demand with all his might that which he desires."]
}].sort((a, b) => { // sort alphabetically by first name
  if (b.author > a.author) {
    return -1
  } else if (b.author < a.author) {
    return 1
  }
  return 0
})

export default quotes