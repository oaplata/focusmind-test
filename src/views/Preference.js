import colors from "../ui-components/colors"
import { Container, HomeContainer } from "../ui-components/container"
import { Span } from '../ui-components/span'
import { P } from '../ui-components/p'
import { H1 } from '../ui-components/titles'
import FondoPreferences from '../resources/fondo_preferences.png'
import { Card, Grid } from "../ui-components/grid"
import { Logo } from '../ui-components/logo'
import { Button } from '../ui-components/buttons'

import Preference1 from '../resources/preference_1.png'
import Preference2 from '../resources/preference_2.png'
import Preference3 from '../resources/preference_3.png'
import Preference4 from '../resources/preference_4.png'
import Preference5 from '../resources/preference_5.png'

const Preference = () => {
  return (
    <Container background={colors.black}>
      <HomeContainer background-url={FondoPreferences}>
        <Span aling="start" color={colors.withe} mb="5.3125rem">Skip</Span>
        <H1 color={colors.blue} size="2.5rem">Which aspect of your life do you want to change?</H1>
        <P mt="0.9375rem" color={colors.withe} x>We will customize the experience according to your goals. You can choose up to three options.</P>
        <Grid>
          <Card>
            <Logo src={Preference1} alt="" width="3.1875rem"></Logo>
            <P weight="700" size="1.875rem" mt="1.5rem">Increase my energy</P>
          </Card>
          <Card className="active">
            <Logo src={Preference2} alt="" width="3rem"></Logo>
            <P weight="700" size="1.875rem" mt="1.5rem">Reduce stress and anxiety</P>
          </Card>
          <Card className="active">
            <Logo src={Preference3} alt="" width="3.1875rem"></Logo>
            <P weight="700" size="1.875rem" mt="1.5rem">Improve my skills</P>
          </Card>
          <Card>
            <Logo src={Preference4} alt="" width="3.1875rem"></Logo>
            <P weight="700" size="1.875rem" mt="1.5rem">Improve my focus and productivity</P>
          </Card>
          <Card>
            <Logo src={Preference5} alt="" width="3.1875rem"></Logo>
            <P weight="700" size="1.875rem" mt="1.5rem">Sleep better</P>
          </Card>
          <Card>
            <Logo src={Preference5} alt="" width="3.1875rem"></Logo>
            <P weight="700" size="1.875rem" mt="1.5rem">Relationships</P>
          </Card>
          <Button mb="7rem" block>Continue</Button>
        </Grid>
      </HomeContainer>
    </Container>
  )
}

export default Preference
