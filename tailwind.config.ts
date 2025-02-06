/* @internal */
import type { Config } from 'tailwindcss';
/* @internal */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/**/*.{ttf,woff,woff2}'],
  theme: {
    extend: {
      fontSize: {
        xxs: ['0.625rem', '130%'], // 10px
        xs: ['0.75rem', '130%'], // 12px
        sm: ['0.875rem', '130%'], // 14px
        base: ['1rem', '130%'], // 16px
        lg: ['1.125rem', '130%'], // 18px
        xl: ['1.375rem', '130%'], // 22px
        xxl: ['2.625rem', '130%'], // 42px
      },

      spacing: {
        '1px': '0.0625rem',
        '2px': '0.125rem',
        '3px': '0.1875rem',
        '4px': '0.25rem',
        '5px': '0.3125rem',
        '6px': '0.375rem',
        '7px': '0.4375rem',
        '8px': '0.5rem',
        '9px': '0.5625rem',
        '10px': '0.625rem',
        '11px': '0.6875rem',
        '12px': '0.75rem',
        '13px': '0.8125rem',
        '14px': '0.875rem',
        '15px': '0.9375rem',
        '16px': '1rem',
        '17px': '1.0625rem',
        '18px': '1.125rem',
        '19px': '1.1875rem',
        '20px': '1.25rem',
        '21px': '1.3125rem',
        '22px': '1.375rem',
        '23px': '1.4375rem',
        '24px': '1.5rem',
        '25px': '1.5625rem',
        '26px': '1.625rem',
        '27px': '1.6875rem',
        '28px': '1.75rem',
        '29px': '1.8125rem',
        '30px': '1.875rem',
        '31px': '1.9375rem',
        '32px': '2rem',
        '33px': '2.0625rem',
        '34px': '2.125rem',
        '35px': '2.1875rem',
        '36px': '2.25rem',
        '37px': '2.3125rem',
        '38px': '2.375rem',
        '39px': '2.4375rem',
        '40px': '2.5rem',
        '41px': '2.5625rem',
        '42px': '2.625rem',
        '43px': '2.6875rem',
        '44px': '2.75rem',
        '45px': '2.8125rem',
        '46px': '2.875rem',
        '47px': '2.9375rem',
        '48px': '3rem',
        '49px': '3.0625rem',
        '50px': '3.125rem',
        '51px': '3.1875rem',
        '52px': '3.25rem',
        '53px': '3.3125rem',
        '54px': '3.375rem',
        '55px': '3.4375rem',
        '56px': '3.5rem',
        '57px': '3.5625rem',
        '58px': '3.625rem',
        '59px': '3.6875rem',
        '60px': '3.75rem',
        '61px': '3.8125rem',
        '62px': '3.875rem',
        '63px': '3.9375rem',
        '64px': '4rem',
        '65px': '4.0625rem',
        '66px': '4.125rem',
        '67px': '4.1875rem',
        '68px': '4.25rem',
        '69px': '4.3125rem',
        '70px': '4.375rem',
        '71px': '4.4375rem',
        '72px': '4.5rem',
        '73px': '4.5625rem',
        '74px': '4.625rem',
        '75px': '4.6875rem',
        '76px': '4.75rem',
        '77px': '4.8125rem',
        '78px': '4.875rem',
        '79px': '4.9375rem',
        '80px': '5rem',
        '81px': '5.0625rem',
        '82px': '5.125rem',
        '83px': '5.1875rem',
        '84px': '5.25rem',
        '85px': '5.3125rem',
        '86px': '5.375rem',
        '87px': '5.4375rem',
        '88px': '5.5rem',
        '89px': '5.5625rem',
        '90px': '5.625rem',
        '91px': '5.6875rem',
        '92px': '5.75rem',
        '93px': '5.8125rem',
        '94px': '5.875rem',
        '95px': '5.9375rem',
        '96px': '6rem',
        '97px': '6.0625rem',
        '98px': '6.125rem',
        '99px': '6.1875rem',
        '100px': '6.25rem',
      },

      colors: {
        accent: {
          500: '#1C5ACC',
          DEFAULT: '#3077F7',
          300: '#B7D0FC',
          200: '#EDF2FD',
          100: '#F6F9FF',
        },

        black: {
          DEFAULT: '#252525',
          300: '#A1A7B3',
          200: '#E2E5EA',
          100: '#F0F2F6',
        },

        red: {
          DEFAULT: '#BA1010',
          400: '#D71616',
          300: '#F5CACA',
          200: '#F8DFDF',
          100: '#FCECEC',
        },

        green: {
          DEFAULT: '#0B7C42',
          400: '#0F914E',
          300: '#B0E4C9',
          200: '#DBF5E8',
          100: '#E8F6F0',
        },

        orange: {
          DEFAULT: '#C77612',
          400: '#DD8416',
          300: '#F8E0C5',
          200: '#FBEDDB',
          100: '#FFF7EC',
        },

        white: '#FFFFFF',
      },

      fontFamily: {
        main: ['Onest', 'serif'],
      },

      screens: {
        mob: '320px',
        tablet: '768px',
        pc: '1024px',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },

        scaleIn: {
          from: { transform: 'scale(0.95) translate(-50%, -50%)', opacity: '0' },
          to: { transform: 'scale(1) translate(-50%, -50%)', opacity: '1' },
        },
        scaleOut: {
          from: { transform: 'scale(1) translate(-50%, -50%)', opacity: '1' },
          to: { transform: 'scale(0.95) translate(-50%, -50%)', opacity: '0' },
        },

        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.2s ease-in forwards',
        scaleIn: 'scaleIn 0.3s ease-out forwards',
        scaleOut: 'scaleOut 0.2s ease-in forwards',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
