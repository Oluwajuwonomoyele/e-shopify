// import { AiOutlineArrowLeft } from 'react-icons/ai';
import { WishlistSection, Container, Title, Empty, Button } from './Wishlist.styles';
import {IoMdHeartDislike} from 'react-icons/io';

const Wishlist = () => {
  return (
    <WishlistSection>
      <Container>
        <Title><span>my wishlist</span></Title>

        <Empty>
          <IoMdHeartDislike />
          <span>Your Wishlist is currently empty.</span>
        </Empty>

        <Button>continue shopping</Button>
      </Container>
    </WishlistSection>
  )
}

export default Wishlist
