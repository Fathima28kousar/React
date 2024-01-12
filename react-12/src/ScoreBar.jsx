import React from 'react';

const div1Styles = {
  backgroundColor: 'pink',
  height: '30px',
  width: '50%',
  display: 'flex',
  alignItems: 'center',
};

function ScoreBar({ country, population }) {
  const barWidth = `${(population / 7693165599) * 100}%`;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{country}</td>
            <td>
              <div style={div1Styles}>
                <div
                  style={{
                    backgroundColor: 'orange',
                    height: '100%',
                    width: barWidth,
                  }}
                ></div>
              </div>
            </td>
            <td>{population}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ScoreBar;
