// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {updateImg, imageItem, isActive} = props

  const {id, thumbnailAltText, thumbnailUrl} = imageItem

  const activeClassName = isActive ? 'btn-active btn' : 'btn'

  const change = () => {
    updateImg(id)
  }

  return (
    <li className="container">
      <button type="button" className={activeClassName} onClick={change}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className="image" />
      </button>
    </li>
  )
}
export default ThumbnailItem
