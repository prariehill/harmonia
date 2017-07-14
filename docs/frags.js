const React = require('react')
import { List, Map } from 'windrift'
import ListCard from '../components/listCard'

export const frag1 = ({nextDoc, prevDoc, inventory}) =>  {
  return <div>
    <p> <ListCard tag="frag1_last"
      expansions={["I settled into my reverie as usual"]}
      author="lynn"
      card={<span>Found this fragment in the archives, not sure which
      book it's from?</span>} />, with a sense of foreboding that this
      time would be different. The veil between the worlds seemed especially
      thin, even before I completed the ritual.</p>
      <p>A shadow fell across my vision, and my extremities went utterly
        numb. If I moved my head, I could see a curious doubling of the world,
        as if there were two copies of reality, one becoming unstuck from the
        other.</p>
      <p>I shook my head, and I could feel the world physically becoming
        unmoored, peeling off and rattling around like a broken valve. </p>
      <p>Then, without warning, the reality I'd known dropped away, the
          rusting hinge connecting me and my old life snapped, as if under
          a great load. <Map from={inventory.frag1_last}
            to={{ _undefined: "And I could see",
                _any: <span>
                        <List tag="frag1-last"
                          expansions={[["And I could see"], ["And I could see"]]}
                           />
                      </span>
          }} />...
      </p>
    </div>
}
