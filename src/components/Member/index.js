import React from 'react'

import TwitterIcon from '../../icons/twitter-profile.svg'
import LinkedinIcon from '../../icons/linkedin-profile.svg'

export default ({ name, role, avatar, blurb, twitter, linkedin }) => (
  <div className="flex-l mv4 tc tl-l">
    <div className="img-member">
      <img className="br-100 w4 h4" src={avatar} />
    </div>
    <div className="mw8 pl3-l">
      <h2 className="f6 ma0">{name}</h2>
      <p className="lh-copy f6 mh-light-gray mv2">{role}</p>
      <p className="lh-copy f6 mt0 pr4-l">{blurb}</p>
      {(twitter || linkedin) && (
        <p>
          {twitter && (
            <a target="_blank" href={twitter}>
              <img
                className="w1 h1 mr2"
                src={TwitterIcon}
                alt="link to twitter profile"
              />
            </a>
          )}
          {linkedin && (
            <a target="_blank" href={linkedin}>
              <img
                className="w1 h1"
                src={LinkedinIcon}
                alt="link to linkedin profile"
              />
            </a>
          )}
        </p>
      )}
    </div>
  </div>
)
