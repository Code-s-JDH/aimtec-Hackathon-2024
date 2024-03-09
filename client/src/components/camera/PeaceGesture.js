// PeaceGesture.js
import * as fp from 'fingerpose';

const peaceGesture = new fp.GestureDescription('peace');

// Vystrčené prsty směřující dolů (index a prostředník)
peaceGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
peaceGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);

// Zbytek prstů je otevřený (nemá žádné zakřivení)
peaceGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.HalfCurl, 0.0);
peaceGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.HalfCurl, 0.0);
peaceGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.HalfCurl, 0.0);

export default peaceGesture;
