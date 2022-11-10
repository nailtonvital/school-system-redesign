import React from 'react'
import './style.css'

export default function EmailCard(props) {
  return (
    <div className="p-5 w-12/12 card">
      <h3 className="font-bold leading-tight text-xl mt-2 mb-2">
        Email Institucional
      </h3>
      <h4 className="font-semibold leading-tight text-base mt-0">Email:</h4>
      <p className="break-words">
        <a href="#">keenan.lane192@etec.sp.gov.br</a>
        <span id="copyButton">
          <i class="bx bx-copy"></i>
        </span>
      </p>
      {props.benefits ? (
        <>
          <h4 className="font-semibold leading-tight text-base mt-0">
            Benefits:
          </h4>
          <ul>
            <li>Github Student Pack</li>
            <li>Figma Pro</li>
            <li>Office 365</li>
            <li>Onedrive</li>
          </ul>
        </>
      ) : null}
    </div>
  );
}
