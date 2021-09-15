import PropTypes from "prop-types";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { MyDiv } from "./style/ScrollToTop";

const ScrollTop = ({ children, window }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    console.log(event);
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#header"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <MyDiv onClick={handleClick}>{children}</MyDiv>
    </Zoom>
  );
};
ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};
export default ScrollTop;
