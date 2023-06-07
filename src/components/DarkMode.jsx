import { useColorScheme } from "@mui/material/styles";
import { Button, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  return (
    <IconButton
      onClick={() => {
        setMode(mode === "light" ? "dark" : "light");
      }}
    >
      {mode === "light" ? <Brightness7Icon /> :  <Brightness4Icon />}
    </IconButton>
  );
}

export default ModeToggle;
