import { UserEntity } from '../../models/UsersEntity'
import './userEntityDetails.scss'

export type Props = {
  userEntity: UserEntity;
}

interface IParams {
  key: string;
  value: number;
}

export const UserEntityDetails = ({ userEntity }: Props) => {
  const date = new Date(userEntity.created);
  const dateToday = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  })

  const params: IParams[] = [{ key: 'Devices', value: userEntity.devices }, { key: 'Sessions', value: userEntity.sessions.length }, { key: 'Events', value: userEntity.events }];

  return (
    <>
      <div className="user-details-container">
        <div className="user-id-container">
          <p className="user-id-details">{userEntity.id}</p>
          <p className="user-id-created">{dateToday} - {userEntity.location}</p>
        </div>
        <div className="user-tile-container">
          {params.map((param, index) => {
            return (
              <div className="user-tile" key={index}>
                <p className="user-tile-title">{param.key}</p>
                <p className="user-tile-value">{param.value}</p>
              </div>
            )
          })}
        </div>
        <div>
          <div className='attributes-container'>
            <div>
              Attributes
              <hr />
            </div>
            <div>Value
              <hr />
            </div>
          </div>
          <div>
            {Object.keys(userEntity.attributes).map((key, value) => {
              return (
                <>
                  <div className='attributes-container'>
                    <div>{key} <hr /></div>
                    <div>{userEntity.attributes[key]} <hr /></div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}