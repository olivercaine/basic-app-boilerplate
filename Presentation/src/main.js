import Reveal from 'reveal.js'
import Notes from 'reveal.js/plugin/notes/notes.esm.js'
import 'reveal.js/dist/reveal.css'
import './deck.css'

Reveal.initialize({
  hash: true,
  width: 1280,
  height: 720,
  margin: 0.04,
  minScale: 0.2,
  maxScale: 2,
  transition: 'fade',
  backgroundTransition: 'none',
  center: false,
  controls: true,
  progress: true,
  slideNumber: false,
  plugins: [Notes],
})
