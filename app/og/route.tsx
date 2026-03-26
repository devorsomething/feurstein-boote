import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const businessName = searchParams.get('name') || 'Bootsvermietung Feurstein'
  const tagline = searchParams.get('tagline') || ''
  const accentColor = searchParams.get('color') || '#0077BE'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1A1A1A',
          padding: '60px',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            backgroundColor: accentColor,
          }}
        />
        <div
          style={{
            fontSize: '72px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          {businessName}
        </div>
        {tagline && (
          <div
            style={{
              fontSize: '28px',
              color: '#AAAAAA',
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            {tagline}
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '60px',
            backgroundColor: '#2A2A2A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '20px', color: '#888888' }}>
            Mehr Infos auf unserer Website →
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
