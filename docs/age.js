const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'

const age = ({nextDoc, prevDoc}) =>  {
  return <div>
    <h1>A Crystal Age</h1>
    <h4>by</h4>
    <h3>W.H. Hudson</h3>
    <h6>Author of "The Purple Land," "A Shepherd's Life," etc.</h6>
    <h2><br/><br/>I</h2>
      <p>
        I do not quite know how it happened, my recollection of the whole matter ebbing in a somewhat clouded condition.
        While hunting for some variety of plants in the mountains, I sat down to rest on the edge of a ravine.
        The ground suddently gave way all about me,
        precipitating me below. The fall was a very considerable one—probably thirty or forty feet, or more,
        and I was <ListCard author="lynn"
          tag="age1-unconscious"
          expansions={["rendered unconscious"]}
          card={<span>Another case of "fall asleep, wake in future". Discuss with class!</span>}
        />.
      </p>
      <p>
        How long I lay there under the heap of earth and stones carried down in my fall
        it is impossible to say: perhaps a long time; but at last I came to myself and struggled up from the debris,
        like a mole coming to the surface of the earth to feel the genial sunshine on his dim eyeballs.
      </p>
      <p>
        I found myself standing in an immense pit. It looked as if the solid earth
        had been indulging in some curious transformation during those moments of insensibility.
        I had a great mass of small fibrous rootlets tightly woven about
        my whole person, so that I was like a colossal basket-worm in its case, or a big man-shaped bottle covered
        with wicker-work. It appeared as if the roots had grown round me.
      </p>
      <p>
        Grateful at having escaped with unbroken bones from such a dangerous accident, I set out walking along the
        edge of the ravine. For an hour or so I followed the valley in its many windings, but, failing to see any
        dwelling-place, I ascended a hill to get a view of the surrounding country.
        In vain I scanned the horizon, waiting impatiently to see the distant puff of white steam from some passing engine.
        There was one large house in sight, but no town, nor even a hamlet, and not one solitary spire.
      </p>
      <p className="lynn-font">
        (Lots here sounds like the <List expansions={[["unknown manuscript"],["unknown manuscript"]]}
        tag="age1-manuscript" />; was this an influence on that author?)
      </p>
    </div>
}
export default age
