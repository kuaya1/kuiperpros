import { ImageResponse } from 'next/og'

export const size = {
  width: 32,
  height: 32,
}

export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #4f46e5 0%, #3730a3 70%, #1e1b4b 100%)',
          borderRadius: '50%',
        }}
      >
        {/* Satellite body */}
        <div
          style={{
            width: '20px',
            height: '10px',
            background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
            borderRadius: '3px',
            position: 'relative',
          }}
        />
        
        {/* Solar panels */}
        <div
          style={{
            position: 'absolute',
            left: '4px',
            top: '8px',
            width: '8px',
            height: '14px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            borderRadius: '1px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: '4px',
            top: '8px',
            width: '8px',
            height: '14px',
            background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
            borderRadius: '1px',
          }}
        />
        
        {/* Central antenna */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: '8px',
            height: '8px',
            background: '#fcd34d',
            borderRadius: '50%',
            border: '1px solid #f59e0b',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
