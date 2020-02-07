import { Coord } from './Coord';
import { Weather } from './Weather';
import { Wind } from './Wind';
import { Clouds } from './Clouds';
import { Main } from './Main';
import { Sys } from './Sys';

export class WeatherData
{
  coord: Coord;
  weather: Weather;
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  dt: bigint;
  sys:Sys;
  timezone: bigint;
  id: bigint;
  name: string;
  cod: number;
}