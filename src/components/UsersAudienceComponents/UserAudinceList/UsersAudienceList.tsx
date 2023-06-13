import { useEffect, useState } from 'react';
import { UserEntity } from '../../../models/UsersEntity';
import './usersAudienceLists.scss'

export const tableHeadTitle = 'Users in Audience';
export type Props = {
  userEntities: UserEntity[];
  setUserEntity: (user: UserEntity) => void;
}

export const UsersAudienceList = ({ userEntities, setUserEntity }: Props) => {
  const [active, setToggle] = useState<number>(-1);

  const handleClick = (user: UserEntity, index: number) => {
    setUserEntity(user);
    setToggle(index);
  }

  return (
    <>
      <div className="content">
        <div className="user-audience-title-container">
          <p className="font-size-m base-color font-weight-bold">{tableHeadTitle}</p>
          <p className="font-size-xs"> Total Users - Showing {userEntities.length} matching users</p>
        </div>
        <hr />
        <div className="user-audience-details-container">
          {userEntities.map((user: UserEntity, index: number) => (
            <div className={active !== index? "user-audience-details" : 'user-audience-details active'} key={index} onClick={() => handleClick(user, index)}>
              <p>{user.id}</p>
              <p>{user.devices} Devices - {user.sessions.length} Sessions - {user.location}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}