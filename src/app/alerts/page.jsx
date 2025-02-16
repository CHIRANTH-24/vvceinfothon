"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const severityColors = {
  critical: "bg-red-500 text-white",
  moderate: "bg-orange-500 text-white",
  minor: "bg-green-500 text-white",
};

const LeakAlerts = () => {
  const [leakData, setLeakData] = useState([
    { timestamp: "2024-10-27 10:00", status: "Leak", location: "Bathroom", severity: "critical", description: "High flow detected in bathroom sink.", action: "Inspect sink and pipes." },
    { timestamp: "2024-10-27 12:30", status: "Continuous flow", location: "Kitchen", severity: "moderate", description: "Continuous water usage in kitchen.", action: "Check dishwasher and faucet." },
    { timestamp: "2024-10-27 15:45", status: "Leak", location: "Garden", severity: "minor", description: "Slightly higher water usage than usual.", action: "Check garden hose and sprinkler system." },
    { timestamp: "2024-10-28 08:15", status: "Leak", location: "Basement", severity: "critical", description: "Possible burst pipe in basement.", action: "Shut off main valve and inspect." },
    { timestamp: "2024-10-28 09:50", status: "Continuous flow", location: "Laundry Room", severity: "moderate", description: "Washing machine running longer than usual.", action: "Ensure washer isn't leaking." },
    { timestamp: "2024-10-28 11:20", status: "Leak", location: "Toilet", severity: "minor", description: "Slow water leakage detected.", action: "Check toilet flapper and flush valve." },
    { timestamp: "2024-10-28 14:00", status: "Leak", location: "Garage", severity: "critical", description: "Significant water pooling detected.", action: "Inspect water heater or pipes." },
    { timestamp: "2024-10-28 16:45", status: "Continuous flow", location: "Kitchen", severity: "moderate", description: "Water usage abnormal near sink area.", action: "Check for dripping faucet or leaks." },
    { timestamp: "2024-10-28 19:30", status: "Leak", location: "Bathroom", severity: "minor", description: "Showerhead dripping after use.", action: "Tighten showerhead or replace washer." },
    { timestamp: "2024-10-29 06:40", status: "Leak", location: "Outdoor Pipeline", severity: "critical", description: "Main outdoor water line losing pressure.", action: "Inspect underground pipe and shut off if needed." },
    { timestamp: "2024-10-29 09:00", status: "Continuous flow", location: "Sprinkler System", severity: "moderate", description: "Sprinklers running longer than scheduled.", action: "Adjust timer and inspect leaks." },
    { timestamp: "2024-10-29 11:10", status: "Leak", location: "Pool Area", severity: "minor", description: "Water level dropping faster than usual.", action: "Check for pool liner damage or cracks." },
    { timestamp: "2024-10-29 14:30", status: "Leak", location: "Dishwasher", severity: "critical", description: "Water leaking under dishwasher.", action: "Turn off appliance and inspect hoses." },
    { timestamp: "2024-10-29 17:20", status: "Continuous flow", location: "Basement", severity: "moderate", description: "Sump pump running continuously.", action: "Check sump pump for malfunctions." },
    { timestamp: "2024-10-29 20:00", status: "Leak", location: "Bathroom", severity: "minor", description: "Slow drip detected in bathtub faucet.", action: "Replace rubber gasket or tighten fixture." },
  ]);

  return (
    <Card className="p-4">
      <h2 className="text-xl font-semibold mb-4">Leak Detection & Alerts</h2>
      {leakData.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Timestamp</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Severity</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leakData.map((alert, index) => (
              <TableRow key={index}>
                <TableCell>{alert.timestamp}</TableCell>
                <TableCell>{alert.status}</TableCell>
                <TableCell>{alert.location}</TableCell>
                <TableCell>
                  <Badge className={severityColors[alert.severity]}>
                    {alert.severity.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell>{alert.description}</TableCell>
                <TableCell>{alert.action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p className="text-gray-500 italic">No leak alerts at this time.</p>
      )}
    </Card>
  );
};

export default LeakAlerts;