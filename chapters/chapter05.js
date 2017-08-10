const React = require('react')
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Map, List, RenderSection, FromInventory, NextChapter, AllButSelection, gameReducers} from 'windrift'
import * as actions from '../actions'
import ListCard from '../components/listCard'
import Reader  from '../components/reader'
import { docs } from '../docs'

export default ({currentSection, inventory, cards}) => {
  const sections = [
    <section>
      <heading>
        <h2>Chapter Five</h2>
        <blockquote>
          "It was a beautiful world, but it was not my world."
          <br/>
          —<i>Moving the Mountain</i>, Charlotte Perkins Gilman (1911)
        </blockquote>
      </heading>
      <p>
        Lillian sent me away with a heavy load of books, papers, and troubled thoughts. I retreated to my
        room, my bed unmade and my things still largely unpacked, and went through <ListCard expansions={["her documents"]}
          tag="c5-docs" card={<span>It did not escape my notice that it was only day two and already
          my student had given me homework.</span>} />,
        one by one.
      </p>
      <p>
        Her evidence was suggestive but not quite convincing. <ListCard expansions={["Ignatius Cadwell"]}
          tag="c5-ignatius" card={<span>This was the "Professor C—" chastised in the newspaper column.</span>} /> was
        one of the founding members of the Futurians. He'd answered an ad for recruits posted in one of the many
        Spiritualist newspapers at the time:
      </p>
      <Reader inventory={inventory} docs={[docs.paper2]} />
      <p>
        He and his <ListCard tag="c5-wife" expansions={["wife"]} card={<span>Despite being a colony that
        ostensibly treated women as equals, Alice was featured only sparsely in the records.</span>} /> Alice moved to the
        nascent Futuria community in 1885, along with about 75 other would-be utopians. The population waxed and waned
        for several years, peaking at 110 in the summer of 1888, until an irreversible slide meant that only 20
        families remained at the time of the Great Hall fire.
      </p>
      <p>
        There was ample evidence in her documents that Cadwell was building something that he wished to keep secret, something
        that caused rumbles in the night, acrid smells, and prolonged absences from community meetings. The
        Futurians <ListCard tag="c5-trade" expansions={["traded"]} card={<span>Like many intentional communities, the
        population was dominated by intellectuals, not farmers, and struggled to feed itself through the long winters.</span>} /> extensively
        with the local villages, and Cadwell's purchases were indeed strange: large quantities of
        copper wire, yards of "India rubber," and so many pounds of brass sheeting that "the horse-carts
        struggled for hours to climb the steep sodden roads to the village." But I wasn't sure he was building a bomb.
      </p>
      <p>
        I kept coming back to that journal fragment I found in Lynn's office the night I arrived. He'd catalogued
        it as SP-X05, same as Cadwell's journals, and what I remembered of the handwriting was a match.
        The fragment appeared to be a draft of a fictional story, but the timing was curious: who takes a break from
        their grand destructive plan to <ListCard expansions={["work on their novel"]}
          card={<span>Or perhaps Cadwell retreated into fantasy in response to the dissolution of the real utopian dream?</span>}
                                          tag="c5-dream" />?
      </p>
      <p>I needed to get those notes back somehow, and find more of them. Surely Lynn, an academic, kept a journal of
        his own—at the very least he'd have extensive documentation of the materials recovered from the construction.
      </p>
    </section>

  ]
  return <RenderSection currentSection={currentSection} sections={sections}  />
}
