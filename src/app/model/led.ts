/**
 * Eine einzelne Led auf dem Raspberry Pi
 */
export interface Led {
  /**
   * Der 0-basierte Index
   */
  index: number;
  /**
   * Die Farbe als valider CSS Farbstring
   * @link https://devdocs.io/css/color
   */
  color: string;
  /**
   * Die Deckkraft
   */
  opacity?: number;
}
