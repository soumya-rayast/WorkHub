import React, { useState } from 'react'
import AuthLayout from '../../components/Layouts/AuthLayout'
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adminInviteToken, setAdminInviteToken] = useState('');
  const [error, setError] = useState('');

  // handle register from 
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError('Please enter  full name');
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password) {
      setError("Please enter the password");
    }

    setError('');
    // SignUp api Call
  }
  return (
    <AuthLayout>
      <div className='lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center '>
        <h3 className='text-xl font-semibold text-black'>
          Create an account
        </h3>
        <p className='text=xs text-slate-700 mt-[5px] mb-6'>
          Join us today by entering your details below.
        </p>
        <form onSubmit={handleSignup} className="flex flex-col gap-4 mt-4">
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label='Full Name'
              placeholder='Sam'
              type='text'
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label='Email Address'
              placeholder='xvz@gmail.com'
              type='text'
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label='Password'
              placeholder='Min 8 characters'
              type='password'
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label='Admin Invite Token'
              placeholder='6 Digit Code'
              type='text'
            />
            {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
            <button type='submit' className='btn-primary'>
              SIGN UP
            </button>
            <p className='text-[13px] text-slate-800 mt-3'>
              Already have an account?{" "}
              <Link to={'/login'} className='font-medium text-primary underline '>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  )
}

export default SignUp
