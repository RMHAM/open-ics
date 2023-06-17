import { DocumentReference } from '@angular/fire/firestore';

export interface Organization {
  name: string;
  region: number;
  district: number;
  parent: DocumentReference<Organization>;
  children: DocumentReference<Organization>[];
}
