"use client";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "../ui/drawer";
import { ScrollArea } from "../ui/scroll-area";
import CandidateList from "../candidate-list";

function JobApplicants({
  setShowApplicantsDrawer,
  showApplicantsDrawer,
  showCurrentCandidateDetailsModal,
  setShowCurrentCandidateDetailsModal,
  currentCandidateDetails,
  setCurrentCandidateDetails,
  jobItem,
  jobApplications,
}) {
  return (
    <Drawer open={showApplicantsDrawer} onOpenChange={setShowApplicantsDrawer}>
     <DrawerContent className="max-h-[50vh] bg-zinc-400">
          <ScrollArea className="h-auto overflow-y-auto">
            <CandidateList 
             currentCandidateDetails={currentCandidateDetails}
             setCurrentCandidateDetails={setCurrentCandidateDetails}
             jobApplications={jobApplications}
             showCurrentCandidateDetailsModal={showCurrentCandidateDetailsModal}
             setShowCurrentCandidateDetailsModal={setShowCurrentCandidateDetailsModal}
            />
          </ScrollArea>
     </DrawerContent>
    </Drawer>
  )
}

export default JobApplicants;
