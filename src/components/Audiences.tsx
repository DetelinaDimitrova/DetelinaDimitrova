import { useEffect, useState } from 'react';
import { UserEntity, generateSampleData } from '../models/UsersEntity';
import { UserEntityDetails } from './UserEntityComponents/UserEntityDetails';
import { UsersAudienceList } from './UsersAudienceComponents/UsersAudienceList';
import './audiences.scss'

export const Audiences = () => {

  const [usersEntities, setUserEntities] = useState<Array<UserEntity>>([]);
  const [userEntity, setUserEntity] = useState<UserEntity | null>();

  useEffect(()=> {
    const totalUsers = generateSampleData();
    setUserEntities(totalUsers);
  }, []);


  return (
    <div className="user-audiences-container">
      <UsersAudienceList userEntities={usersEntities} setUserEntity={setUserEntity}/>
    {userEntity && (
      <UserEntityDetails userEntity={userEntity} />
    )}
    </div>
  )
}
