import React from 'react';
import {Card} from "./Card/card";

export default function   StaticsCard({name, total,number}) {
  return (
      <Card>
        <h5 className="font-semibold">{name}</h5>
        <p className="pt-2 text-md">  ${total} /  {number} orders </p>
      </Card>
  );
}
