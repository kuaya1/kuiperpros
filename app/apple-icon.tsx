import { ImageResponse } from 'next/og'

export const size = {
  width: 180,
  height: 180,
}

export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 50% 30%, #4f46e5 0%, #3730a3 70%, #1e1b4b 100%)',
          borderRadius: '36px', // iOS rounded corners
        }}
      >
        {/* Main satellite body */}
        <div
          style={{
            width: '80px',
            height: '40px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            borderRadius: '8px',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        
        {/* Left solar panels */}
        <div
          style={{
            position: 'absolute',
            left: '20px',
            top: '60px',
            width: '30px',
            height: '60px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            borderRadius: '4px',
          }}
        />
        
        {/* Right solar panels */}
        <div
          style={{
            position: 'absolute',
            right: '20px',
            top: '60px',
            width: '30px',
            height: '60px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            borderRadius: '4px',
          }}
        />
        
        {/* Central antenna/dish */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '24px',
            height: '24px',
            background: '#fcd34d',
            borderRadius: '50%',
            border: '2px solid #f59e0b',
          }}
        />
        
        {/* Signal indicators */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '30px',
            transform: 'translateX(-50%)',
            width: '12px',
            height: '12px',
            background: '#34d399',
            borderRadius: '50%',
            opacity: 0.8,
          }}
        />
        
        <div
          style={{
            position: 'absolute',
            left: '50%',
            bottom: '30px',
            transform: 'translateX(-50%)',
            width: '12px',
            height: '12px',
            background: '#34d399',
            borderRadius: '50%',
            opacity: 0.8,
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
