const MOBILE_MEDIA_QUERY = 'only screen and (min-width: 600px)'

const TITLE_FULL = 'The Terra Times'
const TITLE_ABBR = 'T T T'

// Replace title as-per screen sizes
const checkTitle = () => {
  const mobileUpMediaQuery = matchMedia(MOBILE_MEDIA_QUERY)

  const titleEl = document.getElementById('title')
  if (mobileUpMediaQuery.matches) titleEl.innerText = TITLE_FULL
  else titleEl.innerText = TITLE_ABBR
}

// Check title once on DOM loaded
addEventListener('DOMContentLoaded', checkTitle)

// Check title when screen resizes
addEventListener('resize', checkTitle)