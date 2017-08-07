const React = require('react')
import { List } from 'windrift'
import ListCard from '../components/listCard'


const brooks = ({nextDoc, prevDoc}) => {
  return <div>
    <p>
    My whole mind was in a whirl, but out of the confusion, at length came a conclusion: I could no longer doubt that I,
    who had lived and died in the latter part of the nineteenth century, was alive and strong in the twentieth,
    a <ListCard author="lynn"
      expansions={["hundred years later"]}
      tag="brooks_years"
      nextUnit="section"
      card={<span>Is 100 years a shorthand for a long time (like Biblical "40 years"?)
        <br/>        <br/>
        nb same time span appears
      in <nobr><List tag="brooks_x"
        expansions={[["SP-X"], ["SP-X"]]} /></nobr>

      </span>} />.
    </p>
    <p>
      This I could no more doubt than the consciousness that I was alive. Indeed, the impressions wrought into my being
      were much more real than those which I had just received from
      the strange scenes I had witnessed. I should not have been surprised to see them all disappear
      like the mirage of the desert.
    </p>
    <p>"But even then," I reflected, "I cannot doubt my own existence: <i>I am</i>.
      My dying prayer has been granted. This is the same world that I have lived in; but how changed!"
    </p>
    </div>
}

export default brooks
