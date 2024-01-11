const root = document.documentElement;
const hues = [
  "background_clv",
  "onsurface_clv",
  "primary_clv",
  "surfacecontainer_clv",
  "surface_clv",
  "surfacecontainerlowest_clv",
  "primarycontainer_clv",
  "onprimarycontainer_clv",
  "infocontainer_clv",
  "oninfocontainer_clv",
  "inverseprimary_clv",
  "onprimary_clv",
  "secondary_clv",
  "onsecondary_clv",
  "secondarycontainer_clv",
  "onsecondarycontainer_clv",
  "tertiary_clv",
  "ontertiary_clv",
  "tertiarycontainer_clv",
  "ontertiarycontainer_clv",
  "error_clv",
  "onerror_clv",
  "errorcontainer_clv",
  "onerrorcontainer_clv",
  "onbackground_clv",
  "surfacevariant_clv",
  "onsurfacevariant_clv",
  "outline_clv",
  "inverseonsurface_clv",
  "outlinevariant_clv",
  "shadow_clv",
  "scrim_clv",
  "inversesurface_clv",
  "success_clv",
  "onsuccess_clv",
  "successcontainer_clv",
  "onsuccesscontainer_clv",
  "warning_clv",
  "onwarning_clv",
  "warningcontainer_clv",
  "onwarningcontainer_clv",
  "info_clv",
  "oninfo_clv",
  "primaryfixed_clv",
  "onprimaryfixed_clv",
  "primaryfixeddim_clv",
  "onprimaryfixedvariant_clv",
  "secondaryfixed_clv",
  "onsecondaryfixed_clv",
  "secondaryfixeddim_clv",
  "onsecondaryfixedvariant_clv",
  "tertiaryfixed_clv",
  "ontertiaryfixed_clv",
  "tertiaryfixeddim_clv",
  "ontertiaryfixedvariant_clv",
  "surfacedim_clv",
  "surfacebright_clv",
  "surfacecontainerlow_clv",
  "surfacecontainerhigh_clv",
  "surfacecontainerhighest_clv"
];

const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (prefersDarkMode) {
	swapMode();
} else {

}

function colorSchemeChanged(event) {
  if (event.matches) {
    if (event.media === '(prefers-color-scheme: dark)') {
      // User switched to dark mode
      console.log('User switched to dark mode');
      swapMode();
    } else if (event.media === '(prefers-color-scheme: light)') {
      // User switched to light mode
      console.log('User switched to light mode');
      swapMode();
    }
  }
}


function swapMode() {

  hues.forEach(item => {

    const lightVal = getComputedStyle(root).getPropertyValue(`--light__${item}`);
    const darkVal = getComputedStyle(root).getPropertyValue(`--dark__${item}`);
    
    const lightVarName = `--light__${item}`;
    const darkVarName = `--dark__${item}`;

    root.style.setProperty(lightVarName, darkVal)
    root.style.setProperty(darkVarName, lightVal)

  })

}

// Check if the browser supports matchMedia
if (window.matchMedia) {
  // Add event listener for changes in color scheme
  const darkSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const lightSchemeQuery = window.matchMedia('(prefers-color-scheme: light)');

  darkSchemeQuery.addListener(colorSchemeChanged);
  lightSchemeQuery.addListener(colorSchemeChanged);
}
