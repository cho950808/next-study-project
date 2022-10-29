import Link from 'next/link';
import { useRef } from 'react';
import { FieldErrors, useForm } from 'react-hook-form';

interface createIdform {
  id: string;
  password: string;
  passwordConform: string;
  username: string;
  year: number;
  month: number;
  day: number;
  email: string;
  phonenumber: string;
}

export default function main() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<createIdform>();

  const onValid = (data: createIdform) => {
    console.log('im valid');
  };
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  return (
    <div className="pt-[200px] text-black py-2 space-x-4 flex-1 flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className="w-full flex justify-center">
          <img src="/images/logo/logo-with_text.png" className="cursor-pointer w-72" />
        </div>
        <div className="w-[500px]  flex flex-col items-center justify-center p-10 border border-gray-400 mt-10 mb-5 rounded-lg">
          <div className="w-full mb-5">
            <div className="text-black w-full">아이디</div>
            <div className="flex flex-col mb-5">
              <div className={`w-full border ${Boolean(errors.id?.message) ? 'border-red-500' : 'border-gray-400'} rounded-t-sm text-black`}>
                <input
                  {...register('id', { required: '아이디를 입력해주세요.', minLength: { message: '아이디는 4글자 이상이어야 합니다.', value: 4 } })}
                  type="text"
                  className="w-full py-2 pl-2 bg-white text-black"
                  placeholder="아이디"
                  maxLength={20}
                />
              </div>
              <div className="text-red-500 text-sm">{errors.id?.message}</div>
            </div>
            <div className="text-black w-full">비밀번호</div>
            <div className="flex flex-col mb-5">
              <div className={`w-full border ${Boolean(errors.password?.message) ? 'border-red-500' : 'border-gray-400'} rounded-t-sm text-black`}>
                <input
                  {...register('password', { required: '비밀번호를 입력해주세요.', minLength: { message: '비밀번호는 10글자 이상이어야 합니다.', value: 10 } })}
                  type="password"
                  className="w-full py-2 pl-2 bg-white text-black"
                  placeholder="비밀번호"
                  maxLength={20}
                />
              </div>
              <div className="text-red-500 text-sm">{errors.password?.message}</div>
            </div>
            <div className="text-black w-full">비밀번호 재확인</div>
            <div className="flex flex-col mb-5">
              <div className={`w-full border ${Boolean(errors.passwordConform?.message) ? 'border-red-500' : 'border-gray-400'} rounded-t-sm text-black`}>
                <input
                  {...register('passwordConform', {
                    required: '비밀번호를 확인해주세요.',
                    validate: (val: string) => {
                      if (watch('password') != val) {
                        return '비밀번호가 맞지 않습니다.';
                      }
                    },
                  })}
                  type="password"
                  className="w-full py-2 pl-2 bg-white text-black"
                  placeholder="비밀번호 확인"
                  maxLength={20}
                />
              </div>
              <div className="text-red-500 text-sm">{errors.passwordConform?.message}</div>
            </div>
          </div>
          <div className="w-full mb-5">
            <div className="text-black w-full">이름</div>
            <div className="flex flex-col mb-5">
              <div className={`w-full border ${Boolean(errors.id?.message) ? 'border-red-500' : 'border-gray-400'} rounded-t-sm text-black`}>
                <input
                  {...register('username', { required: '이름을 입력해주세요.', minLength: { message: '이름 형식에 맞춰주세요.', value: 2 } })}
                  type="text"
                  className="w-full py-2 pl-2 bg-white text-black"
                  placeholder="이름"
                  maxLength={4}
                />
              </div>
              <div className="text-red-500 text-sm">{errors.username?.message}</div>
            </div>
            <div className="text-black w-full">생년월일</div>
            <div className="w-full rounded-b-sm mb-5 grid grid-cols-3 gap-2">
              <input type="text" className=" py-2 pl-2 w-full bg-white text-black border border-gray-400 col-span-1" placeholder="년(4자)" maxLength={4} />
              <select className="bg-white text-black w-full border border-gray-400 py-2 pl-2 col-span-1">
                <option>월</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
              <input type="text" className=" py-2 pl-2 w-full bg-white text-black border border-gray-400 col-span-1" placeholder="일" maxLength={4} />
            </div>
            <div className="text-black w-full">성별</div>
            <div className="w-full rounded-b-sm mb-5">
              <select className="bg-white text-black w-full py-2 pl-2 border border-gray-400">
                <option>성별</option>
                <option>남자</option>
                <option>여자</option>
                <option>선택 없음</option>
              </select>
            </div>
            <div className="text-black w-full">본인 확인 이메일</div>
            <div className="w-full border border-gray-400 rounded-b-sm mb-5">
              <input type="password" className="w-full py-2 pl-2 bg-white text-black" maxLength={20} />
            </div>
          </div>
          <div className="text-black w-full">휴대전화</div>
          <div className="w-full border border-gray-400 rounded-b-sm mb-5">
            <input type="password" className="w-full py-2 pl-2 bg-white text-black" maxLength={20} />
          </div>

          {/* <Link href="/"> */}
          <input type="submit" value="가입하기" className="px-20 py-2 bg-black text-white rounded-md w-full cursor-pointer" />
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
}
