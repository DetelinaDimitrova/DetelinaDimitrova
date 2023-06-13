import { UserEntity } from '../../models/UsersEntity';
import Moment from 'react-moment';
import './userEntityDetails.scss';

export type Props = {
  userEntity: UserEntity;
}

interface IParams {
  key: string;
  value: number;
}

export const UserEntityDetails = ({ userEntity }: Props) => {
  const date = new Date(userEntity.created);
  const params: IParams[] = [{ key: 'Devices', value: userEntity.devices }, { key: 'Sessions', value: userEntity.sessions.length }, { key: 'Events', value: userEntity.events }];

  return (
    <>
      <div className="user-details-container">
        <div className="user-id-container">
          <p className="font-size-l base-color font-weight-bold">{userEntity.id}</p>
          <span className="font-size-xs"><Moment format='MMMM DD, YYYY, h:mm:ss A'>{date}</Moment></span>
          <span className="font-size-xs"> - {userEntity.location}</span>
        </div>
        <div className="user-tile-container">
          {params.map((param, index) => {
            return (
              <div key={`user-details-${index}`} className="user-tile">
                <p className="font-size-xs">{param.key}</p>
                <p className="font-size-l base-color font-weight-bold">{param.value}</p>
              </div>
            )
          })}
        </div>
        <div>
          <div className='attributes-container'>
            <div className='flex-row-s'>
              Attributes
              <hr />
            </div>
            <div className='flex-row-m'>Value
              <hr />
            </div>
          </div>
          {Object.keys(userEntity.attributes).map((key, index) => {
            return (
              <div key={`user-attributes-${index}`} className='attributes-container'>
                <div className='flex-row-s base-color'>{key} <hr /></div>
                <div className='flex-row-m base-color'>{userEntity.attributes[key]} <hr /></div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}