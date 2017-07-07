const React = require('react')
import { connect } from 'react-redux'
import { Map, List, FromInventory, RenderSection, NextChapter, AllButSelection} from 'windrift'
import { Computer } from '../components/computer'

import { docs } from '../docs'

const topics = {
  sleeping: {
    label: "sleeping or waking",
    terms: ["sleep",  "overslept", "slept", "wake", "awoken", "unconscious"],
    docs: [docs.bellamy1, docs.age1]
  }
}

export default ({currentSection, inventory}) => {
  const sections = [
    <Computer inventory={inventory} topic={topics.sleeping} />,
    <section>
      <p>"Hello, what are you doing?"</p>
      <p>I was startled by the unexpected voice guiltily pulled back from the computer. A <List
        expansions={[["plain-looking woman"],
        ["plain-looking woman, with drap hair and a long-sleeved, ankle length dress"]]} tag="c2-woman"/> stood in the office doorway, regarding me with suspicion.
      </p>
      <p>When I didn't answer she said, "Who are you?"</p>
      <p>I reminded myself that I was <em>invited</em> here and didn't need to <List expansions={[["apologize"],
      ["apologize (except maybe for breaking into someone's office)"]]} nextUnit={null} tag="c2-apologize" />.
        "I'm Miriam Kemper. I'm substituting for Jeffrey Lynn."
      </p>
      <p>The transformation on her face was immediate. She stepped forward, arms out and palms
        open. "Of course, I'm so sorry. I heard you were coming. Welcome to St. Isidore."
      </p>
      <p>I've always been bad at knowing what to do with my hands so I settled on an awkward shake.
        "Thanks," I said. "There was no one here when I arrived so I—" I gestured vaguely.
      </p>
      <p>She laughed so loudly in response that I was taken aback, but she seemed to mean well. "I know where your room is,
        shall I bring you to it?"
      </p>
      <Map from={inventory.c2_qs} to={{
        "_undefined": <p>
          I hesitated, torn between <List expansions={[["utter exhaustion", "all my questions"], "_last"]} tag="c2_qs" conjunction="and" />.
        </p>,
        "questions": <div>
          <p>I hesitated, and then asked, "What happened to Professor Lynn?"</p>
          <p>She seemed taken back by my directness. "He didn't come back after winter break. I understand that finding a
            last-minute replacement was difficult."
          </p>
          <p>I knew well enough they only called me because I had a (previously unanswered) job application
            on file. "Yes," I said, "but what I mean is—"
          </p>
          <p>"Shall I bring you to your room?" she repeated. I was too tired to press her further, so I just nodded and
            followed her out, leaving the curious computer behind.
          </p>
        </div>,
        "exhaustion": <p>
          I hesitated, then nodded. "Yes, I'm exhausted." She turned without saying anything further, and I followed her
          out, leaving the curious computer behind.
        </p>
      }} />

    </section>,
    <section>
      <p>She told me her name was Abigail, but otherwise said little after taking me back to my car to get my things.
        She didn't offer to help with my bags, which were pathetically small anyway, but she seemed to know the
        college by heart, cutting through dark buildings and pitch black paths as the snow settled in around us.
        In
        the gloom, the buildings looked the same to me, all brick, rectangular, and severe, but one of them
        was faculty housing and we walked right in. I had no idea how I'd find my
        way back to Lynn's office, but that was a problem for another day and a full night's sleep.
      </p>
      <p>Apparently none of the professors were night owls as
        the residence was as dark and quiet as the classrooms. "You're in here," she said, opening another
        unlocked door and gesturing into a room with a single small window and spartan wooden furnishings.
        I wasn't in a snow-filled ditch on the side of the road and the room had a
        bed, so I was happy. I dropped everything in place, mumbled my thanks, and remember nothing
        else after my face hit the pillow.
      </p>
      <NextChapter chapter={3} />

    </section>
        ]
  return <RenderSection currentSection={currentSection} sections={sections} />
}
